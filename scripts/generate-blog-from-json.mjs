#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function escBackticks(s) { return String(s).replace(/`/g, '\\`') }
function unique(arr) { return [...new Set(arr.filter(Boolean))] }
function toSummary(desc) {
  const clean = String(desc || '').replace(/\s+/g, ' ').trim()
  return clean.length > 160 ? clean.slice(0, 157) + '...' : clean
}

function buildTabs(codeImpl = {}) {
  const entries = Object.entries(codeImpl)
    .filter(([lang, code]) => lang && typeof code === 'string')
    .map(([name, code]) => ({ name, lang: name.toLowerCase(), code }))
  return entries
}

function renderMDX(doc, meta = {}) {
  const now = new Date()
  const dateStr = now.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
  const title = `LeetCode ${doc.Problem}: Approaches & Code`
  const summary = toSummary(doc.Description)
  const slug = meta.titleSlug ? slugify(meta.titleSlug) : slugify(doc.Problem)
  const topicTagArr = typeof meta.topicTags === 'string'
    ? meta.topicTags.split(',').map(s => s.trim()).filter(Boolean)
    : Array.isArray(meta.topicTags) ? meta.topicTags : []
  const tags = unique([
    doc.Problem,
    'LeetCode',
    meta.difficulty,
    ...topicTagArr,
    'Algorithms',
    'Data Structures',
    ...(doc.Approaches||[]).map(a => a.name)
  ])

  let mdx = ''
  mdx += `---\n`
  mdx += `title: "${title.replace(/"/g, '\\"')}"\n`
  mdx += `summary: "${summary.replace(/"/g, '\\"')}"\n`
  mdx += `date: "${dateStr}"\n`
  mdx += `tags:\n` + tags.map(t => `  - ${t}`).join('\n') + `\n`
  mdx += `draft: false\n`
  mdx += `---\n\n`
  mdx += `import CodeTabs from "@components/CodeTabs"\n\n`
  mdx += `# ${doc.Problem}\n\n`
  mdx += `${doc.Description}\n\n`

  // Problem metadata (from list API)
  if (Object.keys(meta).length) {
    mdx += `> Difficulty: ${meta.difficulty || '—'}  |  Acceptance: ${meta.acRate ? meta.acRate.toFixed ? meta.acRate.toFixed(2) + '%' : meta.acRate : '—'}  |  Paid: ${meta.isPaidOnly ? 'Yes' : 'No'}\n\n`
    if (topicTagArr.length) {
      mdx += `> Topics: ${topicTagArr.join(', ')}\n\n`
    }
  }
  // TOC
  mdx += `- [Examples](#examples)\n`
  mdx += `- [Constraints](#constraints)\n`
  ;(doc.Approaches||[]).forEach((a) => { mdx += `- [${a.name}](#${slugify(a.name)})\n` })
  mdx += `\n`

  // Examples
  mdx += `## Examples\n\n`
  for (const ex of (doc.Examples || [])) {
    mdx += `Input\n\n\`\`\`text\n${ex.Input}\n\`\`\`\n\n`
    mdx += `Output\n\n\`\`\`text\n${ex.Output}\n\`\`\`\n\n`
  }

  // Constraints
  mdx += `## Constraints\n\n`
  for (const [k, v] of Object.entries(doc.Constraints || {})) {
    mdx += `- ${k} ${v}\n`
  }
  mdx += `\n`

  // Approaches
  for (const a of (doc.Approaches || [])) {
    mdx += `---\n\n`
    mdx += `## ${a.name}\n\n`
    if (a["First Intuition"]) {
      mdx += `**Intuition**\n\n${a["First Intuition"]}\n\n`
    }
    if (Array.isArray(a["Problem-Solving Approach"])) {
      mdx += `**Steps**\n\n`
      for (const step of a["Problem-Solving Approach"]) mdx += `- ${step}\n`
      mdx += `\n`
    }
    const tabs = buildTabs(a["Code Implementation"]) || []
    if (tabs.length) {
      const tabsLiteral = `[\n${tabs.map(t => `  { name: \"${t.name}\", lang: \"${t.lang}\", code: \`${escBackticks(t.code)}\` }`).join(',\n')}\n]`
      mdx += `<CodeTabs client:load tabs={${tabsLiteral}} />\n\n`
    }
    if (a["Complexity Analysis"]) {
      const c = a["Complexity Analysis"]
      mdx += `**Complexity**\n\n- Time: ${c.Time || ''}\n- Space: ${c.Space || ''}\n\n${c.Notes ? `> ${c.Notes}\n\n` : ''}`
    }
  }

  // JSON-LD: TechArticle + FAQ
  const ldArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `LeetCode ${doc.Problem} Solutions`,
    datePublished: now.toISOString(),
    description: summary,
    keywords: unique(['LeetCode', doc.Problem, meta.difficulty, ...topicTagArr, 'Two Pointers', 'Hash Map', 'Brute Force', 'Array']).join(', '),
  }
  const faq = (doc.Approaches || []).map((a) => ({
    '@type': 'Question',
    name: `${a.name} complexity?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `Time: ${(a['Complexity Analysis']||{}).Time||''}; Space: ${(a['Complexity Analysis']||{}).Space||''}. ${(a['Complexity Analysis']||{}).Notes||''}`
    }
  }))
  const ldFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq }
  mdx += `\n<script type=\"application/ld+json\">${JSON.stringify(ldArticle)}</script>\n`
  mdx += `\n<script type=\"application/ld+json\">${JSON.stringify(ldFaq)}</script>\n`

  return { mdx, slug }
}

async function readInput(arg) {
  if (arg === '-' || arg === '--stdin') {
    return await new Promise((resolve, reject) => {
      let data = ''
      process.stdin.setEncoding('utf8')
      process.stdin.on('data', chunk => (data += chunk))
      process.stdin.on('end', () => resolve(data))
      process.stdin.on('error', reject)
    })
  }
  if (!fs.existsSync(arg)) throw new Error('Input JSON not found: ' + arg)
  return fs.readFileSync(arg, 'utf8')
}

async function main() {
  const inPath = process.argv[2] || 'ztemp.json'
  let raw
  try {
    raw = await readInput(inPath)
  } catch (e) {
    console.error(String(e.message || e))
    process.exit(1)
  }
  let parsed = JSON.parse(raw)
  let doc = parsed
  let meta = {}
  // If input is an array like [meta, {text: '{...json...}'}]
  if (Array.isArray(parsed)) {
    const textItem = parsed.find((x) => typeof x?.text === 'string')
    if (textItem) {
      try { doc = JSON.parse(textItem.text) } catch { /* keep */ }
    }
    const metaItem = parsed.find((x) => x && (x.title || x.titleSlug || x.topicTags))
    if (metaItem) meta = metaItem
  }
  const { mdx, slug } = renderMDX(doc, meta)

  const outDir = path.join('src', 'content', 'blog', slug)
  fs.mkdirSync(outDir, { recursive: true })
  const outFile = path.join(outDir, 'index.mdx')
  fs.writeFileSync(outFile, mdx)
  console.log('Generated:', outFile)
}

main()
