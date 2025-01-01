---
title: "LeetCode Problem 3: Longest Substring Without Repeating Characters - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Longest Substring Without Repeating Characters' problem on LeetCode, including brute-force, sliding window, and optimized sliding window methods."
date: "2024-09-05"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Two Pointers, Sliding Window, Hash Set]
---

LeetCode's Problem 3, "Longest Substring Without Repeating Characters," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate strings to identify optimal solutions based on specific constraints. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given a string `s`, find the length of the longest substring without repeating characters.

**Example 1:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: s = "abcabcbb"  
Output: 3
Explanation: The answer is "abc", with the length of 3.
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 2:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: s = "bbbbb"  
Output: 1
Explanation: The answer is "b", with the length of 1.
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 3:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: s = "pwwkew"  
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

## Approach and Solutions

To solve this problem, we need to identify the longest substring within the input string `s` that contains no repeating characters. There are several approaches to achieve this, each with different time and space complexities.

### 1. Brute-Force Approach

The brute-force method involves checking all possible substrings of the input string and determining the longest one without repeating characters. This approach is straightforward but inefficient for large strings due to its high time complexity.

**Algorithm:**
1. Initialize a variable `max_length` to keep track of the maximum length found.
2. Iterate through the string with two nested loops:
    - The outer loop picks the starting index `i`.
    - The inner loop picks the ending index `j`.
3. For each substring `s[i:j]`, check if all characters are unique.
    - If unique, update `max_length` if necessary.
4. Return `max_length` after checking all substrings.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def lengthOfLongestSubstring(s):
    def all_unique(subs):
        return len(set(subs)) == len(subs)

    n = len(s)
    max_length = 0
    for i in range(n):
        for j in range(i + 1, n + 1):
            if all_unique(s[i:j]):
                max_length = max(max_length, j - i)
    return max_length
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function lengthOfLongestSubstring(s) {
    const isUnique = (subs) => new Set(subs).size === subs.length;
    let maxLength = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (isUnique(s.substring(i, j))) {
                maxLength = Math.max(maxLength, j - i);
            }
        }
    }
    return maxLength;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n³)  
**Space Complexity:** O(min(m, n)) where `m` is the size of the character set.

This approach is simple but highly inefficient for large inputs due to its cubic time complexity.

### 2. Sliding Window Approach

The sliding window approach utilizes two pointers to maintain a window of non-repeating characters. This method significantly reduces the time complexity by avoiding the need to check all possible substrings.

**Algorithm:**
1. Initialize two pointers, `left` and `right`, both starting at the beginning of the string.
2. Use a set to keep track of unique characters within the current window.
3. Move the `right` pointer forward:
    - If the character at `right` is not in the set, add it to the set and update `max_length` if necessary.
    - If it is in the set, remove the character at `left` from the set and move the `left` pointer forward.
4. Continue until the `right` pointer reaches the end of the string.
5. Return `max_length`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_length = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    return max_length
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(min(m, n)) where `m` is the size of the character set.

This approach efficiently finds the longest substring without repeating characters by expanding and contracting the window as needed.

### 3. Optimized Sliding Window with Hash Map

This optimized approach uses a hash map to store the last index of each character, allowing the window to jump forward without removing characters one by one. This method further improves efficiency, especially when there are many repeating characters.

**Algorithm:**
1. Initialize a hash map to store the last index of each character.
2. Initialize a variable `left` to mark the start of the window and `max_length` to track the maximum length.
3. Iterate through the string with a `right` pointer:
    - If the character at `right` is already in the hash map and its index is greater than or equal to `left`, update `left` to `hash_map[s[right]] + 1`.
    - Update the hash map with the current index of `s[right]`.
    - Calculate the length of the current window and update `max_length` if necessary.
4. Return `max_length`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def lengthOfLongestSubstring(s):
    char_index_map = {}
    max_length = 0
    left = 0
    for right, char in enumerate(s):
        if char in char_index_map and char_index_map[char] >= left:
            left = char_index_map[char] + 1
        char_index_map[char] = right
        max_length = max(max_length, right - left + 1)
    return max_length
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function lengthOfLongestSubstring(s) {
    const charIndexMap = {};
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (char in charIndexMap && charIndexMap[char] >= left) {
            left = charIndexMap[char] + 1;
        }
        charIndexMap[char] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(min(m, n)) where `m` is the size of the character set.

This optimized method reduces the number of operations by jumping the `left` pointer forward to the position right after the previous occurrence of the current character.

## Conclusion

The "Longest Substring Without Repeating Characters" problem is a common coding interview question that evaluates your ability to analyze and manipulate strings efficiently under specific constraints. By exploring various approaches like the brute-force method, sliding window technique, and optimized sliding window with a hash map, you can determine the optimal solution with varying degrees of efficiency and complexity.

Understanding these solutions not only aids in solving this specific problem but also builds a foundation for tackling more complex challenges involving string processing, algorithm optimization, and efficient use of data structures. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
