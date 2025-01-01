---
title: "LeetCode Problem 271: Encode and Decode Strings - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Encode and Decode Strings' problem on LeetCode, including delimiter-based and length-prefix-based methods."
date: "2024-08-15"
draft: false
tags: [LeetCode, Algorithms, Data Structures, String Manipulation, Encoding, Decoding]
---

LeetCode's Problem 271, "Encode and Decode Strings," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to design efficient algorithms for encoding and decoding a list of strings. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Design an algorithm to encode a list of strings to a single string. The encoded string should be able to be decoded back to the original list of strings.

Implement the `Codec` class:

- `Codec.encode(strs)`: Encodes a list of strings to a single string.
- `Codec.decode(s)`: Decodes a single string to a list of strings.

**Note:** The string may contain any possible characters out of 256 valid ASCII characters. Your algorithm should be generalized to work on any possible characters.

**Example 1:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: strs = ["lint","code","love","you"]  
Output: ["lint","code","love","you"]
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 2:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: strs = [""]  
Output: [""]
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 3:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: strs = ["a"]  
Output: ["a"]
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

## Approach and Solutions

To solve this problem, we need to design a way to encode a list of strings into a single string such that it can be uniquely decoded back to the original list. There are several approaches to achieve this, each with different time and space complexities.

### 1. Delimiter-Based Approach

The delimiter-based approach involves choosing a unique delimiter to separate the strings during encoding. During decoding, the delimiter is used to split the encoded string back into the original list of strings.

**Algorithm:**
1. **Choose a Delimiter:** Select a delimiter that does not appear in any of the strings. A common choice is a sequence like `":;"`.
2. **Encode:** Concatenate all strings in the list, separated by the chosen delimiter.
3. **Decode:** Split the encoded string using the delimiter to retrieve the original list of strings.

**Challenges:** If the chosen delimiter appears within any of the strings, it can lead to incorrect decoding. To handle this, we need to ensure that the delimiter is unique or escape any delimiters present in the strings.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
class Codec:
    def encode(self, strs):
        delimiter = ":;"
        encoded = delimiter.join(strs)
        return encoded

    def decode(self, s):
        delimiter = ":;"
        if not s:
            return [""]
        return s.split(delimiter)
    </code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
class Codec {
    encode(strs) {
        const delimiter = ":;";
        return strs.join(delimiter);
    }

    decode(s) {
        const delimiter = ":;";
        if (s === "") return [""];
        return s.split(delimiter);
    }
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n * k), where `n` is the number of strings and `k` is the average length of the strings. Both encoding and decoding operations involve iterating through all characters.

**Space Complexity:** O(n * k), as we store the entire encoded string and the list of decoded strings.

**Note:** This approach assumes that the chosen delimiter does not appear in any of the strings. If the delimiter can appear within the strings, additional mechanisms (like escaping delimiters) are required to ensure correct decoding.

### 2. Length-Prefix-Based Approach

The length-prefix-based approach involves prefixing each string with its length. This method ensures that the encoded string can be accurately decoded, even if the strings contain the delimiter characters.

**Algorithm:**
1. **Encode:**
    - For each string, append its length followed by a special character (e.g., `'#'`) as a separator, and then the string itself.
    - Concatenate all these parts into a single encoded string.
2. **Decode:**
    - Iterate through the encoded string.
    - For each segment, read the length of the string (up to the separator), then extract the string based on the read length.
    - Repeat until the entire encoded string is processed.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
class Codec:
    def encode(self, strs):
        encoded = ""
        for s in strs:
            encoded += f"{len(s)}#{s}"
        return encoded

    def decode(self, s):
        strs = []
        i = 0
        while i < len(s):
            # Find the delimiter to get the length
            j = i
            while s[j] != '#':
                j += 1
            length = int(s[i:j])
            # Extract the string based on the length
            strs.append(s[j+1:j+1+length])
            i = j + 1 + length
        return strs
    </code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
class Codec {
    encode(strs) {
        let encoded = "";
        for (let s of strs) {
            encoded += `${s.length}#${s}`;
        }
        return encoded;
    }

    decode(s) {
        const strs = [];
        let i = 0;
        while (i < s.length) {
            // Find the delimiter to get the length
            let j = i;
            while (s[j] !== '#') {
                j++;
            }
            const length = parseInt(s.substring(i, j));
            // Extract the string based on the length
            const str = s.substring(j + 1, j + 1 + length);
            strs.push(str);
            i = j + 1 + length;
        }
        return strs;
    }
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n * k), where `n` is the number of strings and `k` is the average length of the strings. Both encoding and decoding operations involve iterating through all characters.

**Space Complexity:** O(n * k), as we store the entire encoded string and the list of decoded strings.

**Advantages:** This approach does not rely on unique delimiters and can handle any characters within the strings, including special characters.

## Conclusion

The "Encode and Decode Strings" problem is a common coding interview question that evaluates your ability to design efficient algorithms for data serialization and deserialization. By exploring various approaches like the delimiter-based method and length-prefix-based encoding, you can effectively encode and decode a list of strings with varying degrees of complexity and efficiency.

Understanding these solutions not only helps in solving this specific problem but also builds a foundation for tackling more complex challenges involving data encoding, string manipulation, and algorithm design. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

Happy coding!

<script>
function copyCode(button) {
   const code = button.previousElementSibling.innerText;
   navigator.clipboard.writeText(code).then(() => {
       button.innerText = 'Copied!';
       setTimeout(() => {
           button.innerText = 'Copy';
       }, 2000);
   }).catch(err => {
       console.error('Failed to copy: ', err);
   });
}
</script>

<style>
.code-container {
   position: relative;
   margin-bottom: 1em;
}

.copy-button {
   position: absolute;
   top: 0;
   right: 0;
   padding: 0.5em;
   background: #4CAF50;
   color: white;
   border: none;
   cursor: pointer;
   font-size: 0.8em;
   border-radius: 3px;
}

.copy-button:hover {
   background: #45a049;
}
</style>
