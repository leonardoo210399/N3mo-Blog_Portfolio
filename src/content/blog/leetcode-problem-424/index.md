---
title: "LeetCode Problem 424: Longest Repeating Character Replacement - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Longest Repeating Character Replacement' problem on LeetCode, including sliding window and frequency counting methods."
date: "2024-09-15"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Sliding Window, Hash Map, Frequency Counting]
---

LeetCode's Problem 424, "Longest Repeating Character Replacement," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate strings to identify optimal solutions based on specific constraints. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given a string `s` that consists of only uppercase English letters, you can perform at most `k` operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

**Example 1:**

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

markdown
Copy code

**Example 2:**

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".

vbnet
Copy code

## Approach and Solutions

To solve this problem, we need to identify the longest substring where we can replace at most `k` characters to make all characters in the substring the same. There are several approaches to achieve this, each with different time and space complexities.

### 1. Sliding Window with Frequency Counting Approach

The sliding window approach is the most efficient method for solving this problem, achieving linear time complexity. This method involves expanding and contracting a window over the string while keeping track of character frequencies to determine the maximum length of a valid substring.

**Algorithm:**
1. **Initialize Variables:**
    - `left` and `right` pointers to define the sliding window.
    - `max_count` to store the count of the most frequent character within the current window.
    - `count` dictionary to keep track of character frequencies.
2. **Expand the Window:**
    - Move the `right` pointer to include a new character in the window.
    - Update the frequency of the current character in the `count` dictionary.
    - Update `max_count` if the current character's frequency is greater than `max_count`.
3. **Check Validity:**
    - If the window size minus `max_count` is greater than `k`, it means we need to perform more than `k` replacements, which is invalid.
    - In this case, move the `left` pointer to shrink the window and update the frequency of the character being removed.
4. **Update Maximum Length:**
    - Continuously update the maximum length of a valid window throughout the process.
5. **Return Result:**
    - After traversing the string, return the maximum length found.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def characterReplacement(s, k):
    count = {}
    max_count = 0
    left = 0
    max_length = 0

    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_count = max(max_count, count[s[right]])
        
        while (right - left + 1) - max_count > k:
            count[s[left]] -= 1
            left += 1
        
        max_length = max(max_length, right - left + 1)
    
    return max_length
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function characterReplacement(s, k) {
    const count = {};
    let maxCount = 0;
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;
        maxCount = Math.max(maxCount, count[char]);
        
        while ((right - left + 1) - maxCount > k) {
            count[s[left]]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(1) (since the size of the `count` dictionary is bounded by the number of uppercase English letters, which is 26)

This method efficiently finds the longest valid substring by maintaining the count of the most frequent character and adjusting the window size accordingly.

### 2. Brute-Force Approach

The brute-force method involves checking all possible substrings and determining the maximum length of a substring that can be converted to a single repeating character with at most `k` replacements. While simple to implement, this approach is inefficient for large strings due to its high time complexity.

**Algorithm:**
1. **Initialize Maximum Length:** Start with a variable to keep track of the maximum length found.
2. **Iterate Through All Substrings:**
    - Use two nested loops to consider every possible substring.
    - For each substring, count the frequency of each character.
    - Determine the number of replacements needed, which is the length of the substring minus the frequency of the most common character.
    - If the number of replacements is less than or equal to `k`, update `max_length` if necessary.
3. **Return Maximum Length:** After checking all substrings, return the maximum length recorded.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def characterReplacement(s, k):
    max_length = 0
    n = len(s)

    for i in range(n):
        freq = {}
        max_freq = 0
        for j in range(i, n):
            freq[s[j]] = freq.get(s[j], 0) + 1
            max_freq = max(max_freq, freq[s[j]])
            if (j - i + 1) - max_freq > k:
                break
            max_length = max(max_length, j - i + 1)
    
    return max_length
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function characterReplacement(s, k) {
    let maxLength = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const freq = {};
        let maxFreq = 0;
        for (let j = i; j < n; j++) {
            freq[s[j]] = (freq[s[j]] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[s[j]]);
            if ((j - i + 1) - maxFreq > k) {
                break;
            }
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }
    
    return maxLength;
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n²)  
**Space Complexity:** O(1)

This approach is not recommended for large inputs due to its quadratic time complexity but serves as a good starting point for understanding the problem.

### 3. Optimized Sliding Window with Variable Window Size

An optimization over the basic sliding window approach involves dynamically adjusting the window size based on the frequency of characters, ensuring that the window always represents a valid substring that can be transformed with at most `k` replacements.

**Algorithm:**
1. **Initialize Variables:**
    - `left` and `right` pointers to define the sliding window.
    - `count` dictionary to keep track of character frequencies.
    - `max_count` to store the frequency of the most common character within the current window.
    - `max_length` to store the maximum length found.
2. **Expand the Window:**
    - Move the `right` pointer to include a new character in the window.
    - Update the frequency of the current character in the `count` dictionary.
    - Update `max_count` if the current character's frequency is greater than `max_count`.
3. **Adjust the Window:**
    - If the window size minus `max_count` exceeds `k`, it means more than `k` replacements are needed.
    - In this case, move the `left` pointer to shrink the window and update the frequency of the character being removed.
4. **Update Maximum Length:**
    - Continuously update the maximum length of a valid window throughout the process.
5. **Return Result:**
    - After traversing the string, return the maximum length found.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def characterReplacement(s, k):
    count = {}
    max_count = 0
    left = 0
    max_length = 0

    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_count = max(max_count, count[s[right]])
        
        while (right - left + 1) - max_count > k:
            count[s[left]] -= 1
            left += 1
        
        max_length = max(max_length, right - left + 1)
    
    return max_length
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function characterReplacement(s, k) {
    const count = {};
    let maxCount = 0;
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;
        maxCount = Math.max(maxCount, count[char]);
        
        while ((right - left + 1) - maxCount > k) {
            count[s[left]]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(1) (since the size of the `count` dictionary is bounded by the number of uppercase English letters, which is 26)

This optimized sliding window approach ensures that the window always represents the longest possible valid substring by dynamically adjusting based on character frequencies.

## Conclusion

The "Longest Repeating Character Replacement" problem is a common coding interview question that evaluates your ability to analyze and manipulate strings efficiently under specific constraints. By exploring various approaches like the sliding window technique, brute-force method, and optimized sliding window with frequency counting, you can determine the optimal solution with varying degrees of efficiency and complexity.

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
