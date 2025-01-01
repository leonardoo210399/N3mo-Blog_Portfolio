---
title: "LeetCode Problem 125: Valid Palindrome - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Valid Palindrome' problem on LeetCode, including two-pointer and string manipulation methods."
date: "2024-08-30"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Two Pointers, String Manipulation]
---

LeetCode's Problem 125, "Valid Palindrome," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate strings to determine if they meet specific criteria. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Example 1:**

Input: s = "A man, a plan, a canal: Panama"  
Output: true

**Example 2:**

Input: s = "race a car"  
Output: false

**Example 3:**

Input: s = " "  
Output: true

## Approach and Solutions

To solve this problem, we need to determine whether the input string `s` is a palindrome by considering only alphanumeric characters and ignoring cases. There are several approaches to achieve this, each with different time and space complexities.

### 1. Two-Pointer Approach

The two-pointer approach involves using two indices that start from the beginning and end of the string, moving towards each other while comparing characters. This method ensures that we only traverse the string once and use constant extra space.

**Algorithm:**
1. Initialize two pointers, `left` at the start and `right` at the end of the string.
2. While `left` is less than `right`:
    - Increment `left` until it points to an alphanumeric character.
    - Decrement `right` until it points to an alphanumeric character.
    - Compare the characters at `left` and `right` (case-insensitive).
    - If they are not equal, return `false`.
    - Move both pointers towards the center.
3. If all corresponding characters match, return `true`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def isPalindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        # Move left pointer to the next alphanumeric character
        while left < right and not s[left].isalnum():
            left += 1
        # Move right pointer to the previous alphanumeric character
        while left < right and not s[right].isalnum():
            right -= 1
        # Compare characters
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // Move left pointer to the next alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Move right pointer to the previous alphanumeric character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        // Compare characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isAlphanumeric(char) {
return /^[a-z0-9]+$/i.test(char);
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

This method is efficient as it only requires a single pass through the string with constant extra space.

### 2. String Manipulation Approach

The string manipulation approach involves cleaning the string by removing non-alphanumeric characters and converting all letters to the same case. After cleaning, we check if the resulting string is equal to its reverse.

**Algorithm:**
1. Initialize an empty string `cleaned`.
2. Iterate through each character in `s`:
    - If the character is alphanumeric, convert it to lowercase and append it to `cleaned`.
3. Compare `cleaned` with its reversed version.
    - If they are equal, return `true`.
    - Otherwise, return `false`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def isPalindrome(s):
    # Clean the string: remove non-alphanumeric and convert to lowercase
    cleaned = ''.join(char.lower() for char in s if char.isalnum())
    # Check if the cleaned string is equal to its reverse
    return cleaned == cleaned[::-1]
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function isPalindrome(s) {
    // Clean the string: remove non-alphanumeric and convert to lowercase
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the cleaned string is equal to its reverse
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

While this method is straightforward and easy to implement, it requires additional space to store the cleaned string and its reverse.

## Conclusion

The "Valid Palindrome" problem is a common coding interview question that evaluates your ability to manipulate and analyze strings efficiently under specific constraints. By exploring various approaches like the two-pointer technique and string manipulation, you can determine whether a string is a palindrome with varying degrees of efficiency and complexity.

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
