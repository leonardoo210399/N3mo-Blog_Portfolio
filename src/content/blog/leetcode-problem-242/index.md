---
title: "LeetCode Problem 242: Valid Anagram - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Valid Anagram' problem on LeetCode, including sorting and hash table methods."
date: "2024-07-30"
draft: false
tags: [Blind 75, LeetCode, Algorithms, Data Structures, Hash Table, Sorting, Counting]
---

LeetCode's Problem 242, "Valid Anagram," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to determine whether two strings are anagrams of each other efficiently. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Example 1:**

Input: s = "anagram", t = "nagaram"  
Output: true

**Example 2:**

Input: s = "rat", t = "car"  
Output: false

**Example 3:**

Input: s = "", t = ""  
Output: true

## Approach and Solutions

To solve this problem, we need to determine whether the second string `t` is an anagram of the first string `s`. An anagram means that both strings contain the same characters with the same frequency, but possibly in a different order. There are several approaches to achieve this, each with different time and space complexities.

### 1. Sorting Approach

The sorting approach involves sorting both strings and then comparing them. If both sorted strings are identical, then `t` is an anagram of `s`.

**Algorithm:**
1. Check if the lengths of `s` and `t` are different. If they are, return `false`.
2. Convert both strings to character arrays.
3. Sort both character arrays.
4. Compare the sorted arrays. If they are identical, return `true`; otherwise, return `false`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    return sorted(s) == sorted(t)
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n log n) due to the sorting step.

**Space Complexity:** O(n) because of the additional space used for sorting.

This method is straightforward and easy to implement but involves sorting, which increases the time complexity.

### 2. Hash Table (Counting) Approach

The hash table approach involves counting the frequency of each character in both strings and then comparing these counts. If the counts match for all characters, `t` is an anagram of `s`.

**Algorithm:**
1. Check if the lengths of `s` and `t` are different. If they are, return `false`.
2. Initialize an empty dictionary (or object) to store character counts.
3. Iterate through each character in `s` and increment its count in the dictionary.
4. Iterate through each character in `t` and decrement its count in the dictionary.
    - If a character in `t` is not found in the dictionary or its count becomes negative, return `false`.
5. After processing both strings, return `true` as all counts should be zero.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    count = {}
    for char in s:
        count[char] = count.get(char, 0) + 1
    for char in t:
        if char not in count or count[char] == 0:
            return False
        count[char] -= 1
    return True
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)

**Space Complexity:** O(1) since the number of possible characters is limited (e.g., 26 for lowercase English letters).

This method is more efficient than the sorting approach as it achieves linear time complexity by utilizing additional space for counting.

### 3. Array Counting Approach (Optimized for Lowercase Letters)

If the strings contain only lowercase English letters, we can use an array to count character frequencies, which can be faster due to lower overhead compared to a hash table.

**Algorithm:**
1. Check if the lengths of `s` and `t` are different. If they are, return `false`.
2. Initialize an array of size 26 (for each lowercase letter) with all elements set to zero.
3. Iterate through each character in `s` and increment the corresponding count in the array.
4. Iterate through each character in `t` and decrement the corresponding count in the array.
    - If any count goes negative, return `false`.
5. After processing both strings, return `true` as all counts should be zero.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    count = [0] * 26
    for char in s:
        count[ord(char) - ord('a')] += 1
    for char in t:
        count[ord(char) - ord('a')] -= 1
        if count[ord(char) - ord('a')] < 0:
            return False
    return True
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const count = Array(26).fill(0);
    for (let char of s) {
        count[char.charCodeAt(0) - 97]++;
    }
    for (let char of t) {
        count[char.charCodeAt(0) - 97]--;
        if (count[char.charCodeAt(0) - 97] < 0) {
            return false;
        }
    }
    return true;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)

**Space Complexity:** O(1)

This optimized approach leverages the fixed size of the alphabet to achieve constant space usage while maintaining linear time complexity.

## Conclusion

The "Valid Anagram" problem is a common coding interview question that evaluates your ability to manipulate and analyze strings efficiently. By exploring various approaches like the sorting method, hash table counting, and array counting optimizations, you can determine whether one string is an anagram of another with varying degrees of efficiency.

Understanding these solutions not only helps in solving this specific problem but also builds a foundation for tackling more complex challenges involving string manipulation and character counting. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
