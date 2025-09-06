import { createSignal, For, Show } from "solid-js"

type Tab = {
  name: string
  code: string
  lang?: string
}

type Props = {
  tabs: Tab[]
  initialIndex?: number
}

export default function CodeTabs(props: Props) {
  const [active, setActive] = createSignal(props.initialIndex ?? 0)
  const [copied, setCopied] = createSignal(false)

  const current = () => props.tabs[active()] ?? props.tabs[0]

  async function copy() {
    try {
      await navigator.clipboard.writeText(current().code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (e) {
      // noop
    }
  }

  if (!props.tabs || props.tabs.length === 0) return null

  return (
    <div class="w-full border rounded-lg border-black/15 dark:border-white/20 overflow-hidden bg-white/70 dark:bg-black/40 backdrop-blur">
      <div class="flex items-center justify-between gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
        <div role="tablist" class="flex flex-wrap gap-1">
          <For each={props.tabs}>
            {(tab, i) => (
              <button
                role="tab"
                aria-selected={active() === i()}
                onClick={() => setActive(i())}
                class={
                  "px-2.5 py-1.5 text-xs rounded border transition-colors " +
                  (active() === i()
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "bg-transparent text-black/70 dark:text-white/70 border-transparent hover:bg-black/10 hover:dark:bg-white/10")
                }
              >
                {tab.name}
              </button>
            )}
          </For>
        </div>
        <div class="flex items-center gap-2">
          <Show when={copied()}>
            <span class="text-xs text-emerald-600 dark:text-emerald-400">Copied</span>
          </Show>
          <button
            onClick={copy}
            class="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-black/20 dark:border-white/20 hover:bg-black/10 hover:dark:bg-white/10 transition-colors"
            aria-label="Copy code"
            title="Copy code"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </button>
        </div>
      </div>
      <div class="p-3">
        <div class="text-[10px] uppercase tracking-wide text-black/50 dark:text-white/50 mb-1">
          {current()?.lang ? current()?.lang : "code"}
        </div>
        <pre class="max-h-[60vh] overflow-auto rounded bg-black/5 dark:bg-white/10 p-3 text-[12.5px] leading-relaxed text-black dark:text-white font-mono">
          <code>{current()?.code}</code>
        </pre>
      </div>
    </div>
  )
}

