---
title: "LeetCode Problem 76: Minimum Window Substring - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Minimum Window Substring' problem on LeetCode, including sliding window and frequency counting methods."
date: "2024-09-20"
draft: false
tags: [Blind 75, LeetCode, Algorithms, Data Structures, Sliding Window, Hash Map, String Manipulation]
---

LeetCode's Problem 76, "Minimum Window Substring," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate strings to identify optimal solutions based on specific constraints. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given two strings `s` and `t`, return the **minimum window** in `s` which will contain all the characters in `t`. If there is no such window in `s` that covers all characters in `t`, return an empty string `""`.

**Note:**
- If there is such a window, it is guaranteed that there will always be only one unique minimum window in `s`.

**Example 1:**

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

markdown
Copy code

**Example 2:**

Input: s = "a", t = "a"
Output: "a"

markdown
Copy code

**Example 3:**

Input: s = "a", t = "aa"
Output: "" Explanation: Both 'a's from string t must be included in the window. Since the largest window of s only has one 'a', return empty string.

less
Copy code

## Approach and Solutions

To solve this problem, we need to find the smallest substring in `s` that contains all the characters of `t` (including duplicates). There are several approaches to achieve this, each with different time and space complexities.

### 1. Sliding Window with Frequency Counting Approach

The sliding window approach is the most efficient method for solving this problem, achieving linear time complexity. This method involves expanding and contracting a window over the string while keeping track of character frequencies to determine the minimum window that satisfies the condition.

**Algorithm:**
1. **Initialize Variables:**
    - `need` dictionary to count the frequency of each character in `t`.
    - `window` dictionary to keep track of the characters in the current window.
    - `have` to track how many unique characters in `t` are present in the current window with the required frequency.
    - `required` to store the number of unique characters in `t`.
    - `left` and `right` pointers to define the sliding window.
    - `res` tuple to store the result window length and indices.

2. **Expand the Window:**
    - Move the `right` pointer to include a new character in the window.
    - Update the frequency of the current character in the `window` dictionary.
    - If the frequency matches the required frequency in `need`, increment `have`.

3. **Contract the Window:**
    - While `have` equals `required`, try to shrink the window from the left to find the smallest window.
    - Update the `res` if the current window is smaller than the previously recorded window.
    - Remove the leftmost character from the window and update its frequency.
    - If the frequency falls below the required frequency, decrement `have`.
    - Move the `left` pointer forward.

4. **Return the Result:**
    - If a valid window is found, return the substring using the recorded indices.
    - Otherwise, return an empty string.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def minWindow(s, t):
    from collections import defaultdict

    if not t or not s:
        return ""

    # Dictionary which keeps a count of all the unique characters in t.
    need = defaultdict(int)
    for char in t:
        need[char] += 1

    # Number of unique characters in t that need to be present in the desired window.
    required = len(need)

    # Left and Right pointer
    left, right = 0, 0

    # formed is used to keep track of how many unique characters in t are present in the current window
    formed = 0

    # Dictionary which keeps a count of all the unique characters in the current window.
    window = defaultdict(int)

    # ans tuple of the form (window length, left, right)
    ans = float("inf"), None, None

    while right < len(s):
        character = s[right]
        window[character] += 1

        # If the frequency of the current character added equals to the desired count in t
        if character in need and window[character] == need[character]:
            formed += 1

        # Try and contract the window till the point it ceases to be 'desirable'.
        while left <= right and formed == required:
            character = s[left]

            # Save the smallest window until now.
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)

            # The character at the position pointed by the `left` pointer is no longer a part of the window.
            window[character] -= 1
            if character in need and window[character] < need[character]:
                formed -= 1

            # Move the left pointer ahead, this would help to look for a new window.
            left += 1    

        # Keep expanding the window once we are done contracting.
        right += 1    

    return "" if ans[0] == float("inf") else s[ans[1]: ans[2] + 1]
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function minWindow(s, t) {
    if (t.length > s.length) return "";

    // Dictionary which keeps a count of all the unique characters in t.
    const need = {};
    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }

    // Number of unique characters in t that need to be present in the desired window.
    const required = Object.keys(need).length;

    // Left and Right pointer
    let left = 0, right = 0;

    // formed is used to keep track of how many unique characters in t are present in the current window
    let formed = 0;

    // Dictionary which keeps a count of all the unique characters in the current window.
    const window = {};

    // ans tuple of the form [window length, left, right]
    let ans = [Infinity, null, null];

    while (right < s.length) {
        const character = s[right];
        window[character] = (window[character] || 0) + 1;

        // If the frequency of the current character added equals to the desired count in t
        if (need[character] && window[character] === need[character]) {
            formed += 1;
        }

        // Try and contract the window till the point it ceases to be 'desirable'.
        while (left <= right && formed === required) {
            const char = s[left];

            // Save the smallest window until now.
            if (right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }

            // The character at the position pointed by the `left` pointer is no longer a part of the window.
            window[char] -= 1;
            if (need[char] && window[char] < need[char]) {
                formed -= 1;
            }

            // Move the left pointer ahead, this would help to look for a new window.
            left += 1;
        }

        // Keep expanding the window once we are done contracting.
        right += 1;   
    }

    return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
    }
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(m) where `m` is the number of unique characters in `t`

This method efficiently finds the smallest window by maintaining the counts of necessary characters and dynamically adjusting the window size.

### 2. Sliding Window Optimized Approach

An optimized sliding window approach involves using a hash map to store character frequencies and dynamically adjusting the window size to minimize unnecessary computations. This method is similar to the basic sliding window but includes optimizations for better performance in certain scenarios.

**Algorithm:**
1. **Initialize Variables:**
    - `need` dictionary to count the frequency of each character in `t`.
    - `window` dictionary to keep track of the characters in the current window.
    - `have` to track how many characters meet the required frequency.
    - `left` and `right` pointers for the window.
    - `res` tuple to store the result window.

2. **Expand the Window:**
    - Move the `right` pointer to include a new character.
    - Update the frequency in the `window` dictionary.
    - If the frequency matches the `need`, increment `have`.

3. **Contract the Window:**
    - While `have` equals the number of unique characters required, try to shrink the window from the left.
    - Update the result if a smaller valid window is found.
    - Decrement the frequency of the leftmost character.
    - If the frequency falls below the required, decrement `have`.
    - Move the `left` pointer forward.

4. **Return the Result:**
    - After traversing, return the smallest window found.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def minWindow(s, t):
    from collections import Counter

    if not t or not s:
        return ""

    dict_t = Counter(t)

    required = len(dict_t)

    # Filter all the characters from s into a new list along with their index.
    # The filtering is done so as to have a list of all the characters in s that are present in t.
    filtered_s = [(i, char) for i, char in enumerate(s) if char in dict_t]

    l, r = 0, 0
    formed = 0
    window_counts = {}
    ans = float("inf"), None, None

    while r < len(filtered_s):
        char = filtered_s[r][1]
        window_counts[char] = window_counts.get(char, 0) + 1

        if window_counts[char] == dict_t[char]:
            formed += 1

        while l <= r and formed == required:
            char = filtered_s[l][1]

            start = filtered_s[l][0]
            end = filtered_s[r][0]

            if end - start + 1 < ans[0]:
                ans = (end - start + 1, start, end)

            window_counts[char] -= 1
            if window_counts[char] < dict_t[char]:
                formed -= 1

            l += 1    

        r += 1    

    return "" if ans[0] == float("inf") else s[ans[1]: ans[2] + 1]
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function minWindow(s, t) {
    if (t.length > s.length) return "";

    // Dictionary which keeps a count of all the unique characters in t.
    const dict_t = {};
    for (let char of t) {
        dict_t[char] = (dict_t[char] || 0) + 1;
    }

    // Number of unique characters in t, which need to be present in the desired window.
    const required = Object.keys(dict_t).length;

    // Filter all the characters from s into a new list along with their index.
    // The filtering is done so as to have a list of all the characters in s that are present in t.
    const filtered_s = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (dict_t[char]) {
            filtered_s.push([i, char]);
        }
    }

    let l = 0, r = 0;
    let formed = 0;
    const window_counts = {};
    let ans = [Infinity, null, null];

    while (r < filtered_s.length) {
        const char = filtered_s[r][1];
        window_counts[char] = (window_counts[char] || 0) + 1;

        if (window_counts[char] === dict_t[char]) {
            formed += 1;
        }

        while (l <= r && formed === required) {
            const char = filtered_s[l][1];

            const start = filtered_s[l][0];
            const end = filtered_s[r][0];

            if (end - start + 1 < ans[0]) {
                ans = [end - start + 1, start, end];
            }

            window_counts[char] -= 1;
            if (window_counts[char] < dict_t[char]) {
                formed -= 1;
            }

            l += 1;
        }

        r += 1;   
    }

    return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
    }
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(m) where `m` is the number of unique characters in `t`

This optimized sliding window approach reduces the number of unnecessary iterations by filtering irrelevant characters.

### 3. Optimized Sliding Window with Hash Map

This optimized approach uses a hash map to store the count of characters in `t` and dynamically adjusts the window size to minimize unnecessary computations. It further enhances the efficiency of the sliding window technique.

**Algorithm:**
1. **Initialize Variables:**
    - `need` dictionary to count the frequency of each character in `t`.
    - `window` dictionary to keep track of the characters in the current window.
    - `have` to track how many characters meet the required frequency.
    - `left` and `right` pointers for the window.
    - `res` tuple to store the result window.

2. **Expand the Window:**
    - Move the `right` pointer to include a new character.
    - Update the frequency in the `window` dictionary.
    - If the frequency matches the `need`, increment `have`.

3. **Contract the Window:**
    - While `have` equals `required`, try to shrink the window from the left.
    - Update the result if a smaller valid window is found.
    - Decrement the frequency of the leftmost character.
    - If the frequency falls below the required, decrement `have`.
    - Move the `left` pointer forward.

4. **Return the Result:**
    - After traversing, return the smallest window found.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def minWindow(s, t):
    from collections import Counter

    if not t or not s:
        return ""

    dict_t = Counter(t)
    required = len(dict_t)

    # Filter all the characters from s into a new list along with their index.
    filtered_s = [(i, char) for i, char in enumerate(s) if char in dict_t]

    left, right = 0, 0
    formed = 0
    window_counts = {}
    ans = float("inf"), None, None

    while right < len(filtered_s):
        char = filtered_s[right][1]
        window_counts[char] = window_counts.get(char, 0) + 1

        if window_counts[char] == dict_t[char]:
            formed += 1

        while left <= right and formed == required:
            char = filtered_s[left][1]

            start = filtered_s[left][0]
            end = filtered_s[right][0]

            if end - start + 1 < ans[0]:
                ans = (end - start + 1, start, end)

            window_counts[char] -= 1
            if window_counts[char] < dict_t[char]:
                formed -= 1

            left += 1    

        right += 1    

    return "" if ans[0] == float("inf") else s[ans[1]: ans[2] + 1]
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function minWindow(s, t) {
    if (t.length > s.length) return "";

    // Dictionary which keeps a count of all the unique characters in t.
    const dict_t = {};
    for (let char of t) {
        dict_t[char] = (dict_t[char] || 0) + 1;
    }

    // Number of unique characters in t that need to be present in the desired window.
    const required = Object.keys(dict_t).length;

    // Filter all the characters from s into a new list along with their index.
    const filtered_s = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (dict_t[char]) {
            filtered_s.push([i, char]);
        }
    }

    let left = 0, right = 0;
    let formed = 0;
    const window_counts = {};
    let ans = [Infinity, null, null];

    while (right < filtered_s.length) {
        const char = filtered_s[right][1];
        window_counts[char] = (window_counts[char] || 0) + 1;

        if (window_counts[char] === dict_t[char]) {
            formed += 1;
        }

        while (left <= right && formed === required) {
            const char = filtered_s[left][1];

            const start = filtered_s[left][0];
            const end = filtered_s[right][0];

            if (end - start + 1 < ans[0]) {
                ans = [end - start + 1, start, end];
            }

            window_counts[char] -= 1;
            if (window_counts[char] < dict_t[char]) {
                formed -= 1;
            }

            left += 1;
        }

        right += 1;   
    }

    return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
    }
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(m) where `m` is the number of unique characters in `t`

This optimized sliding window approach enhances performance by filtering irrelevant characters and minimizing window adjustments.

## Conclusion

The "Minimum Window Substring" problem is a common coding interview question that evaluates your ability to analyze and manipulate strings efficiently under specific constraints. By exploring various approaches like the sliding window technique with frequency counting and optimized sliding window methods, you can determine the smallest window that satisfies the condition with varying degrees of efficiency and complexity.

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
