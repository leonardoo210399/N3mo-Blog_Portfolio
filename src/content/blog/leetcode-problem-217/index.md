---
title: "LeetCode Problem 217: Contains Duplicate - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Contains Duplicate' problem on LeetCode, including brute-force and hash table methods."
date: "2024-07-25"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Hash Table, Sorting]
---

LeetCode's Problem 217, "Contains Duplicate," is a fundamental problem frequently encountered in technical interviews. It tests your ability to determine whether an array contains any duplicate elements efficiently. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

**Example 1:**

Input: nums = [1,2,3,1] Output: true

markdown
Copy code

**Example 2:**

Input: nums = [1,2,3,4] Output: false

markdown
Copy code

**Example 3:**

Input: nums = [1,1,1,3,3,4,3,2,4,2] Output: true

typescript
Copy code

## Approach and Solutions

To solve this problem, we need to check if the array contains any duplicates. There are several approaches to achieve this, each with different time and space complexities.

### 1. Brute-Force Approach

The brute-force method involves checking each element against every other element in the array to identify duplicates.

**Algorithm:**
1. Iterate through the array using index `i`.
2. For each element `nums[i]`, iterate through the array again using index `j` starting from `i + 1`.
3. Compare `nums[i]` with `nums[j]`.
4. If a duplicate is found, return `true`.
5. If no duplicates are found after checking all pairs, return `false`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def containsDuplicate(nums):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] == nums[j]:
                return True
    return False
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function containsDuplicate(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n²)

**Space Complexity:** O(1)

This approach is straightforward but inefficient for large datasets due to its quadratic time complexity.

### 2. Sorting Approach

By sorting the array first, we can then check for duplicates by comparing adjacent elements.

**Algorithm:**
1. Sort the array `nums`.
2. Iterate through the sorted array.
3. For each element, compare it with the next element.
4. If any two adjacent elements are equal, return `true`.
5. If no duplicates are found after the iteration, return `false`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def containsDuplicate(nums):
    nums.sort()
    for i in range(len(nums) - 1):
        if nums[i] == nums[i + 1]:
            return True
    return False
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function containsDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n log n) due to the sorting step.

**Space Complexity:** O(1) or O(n) depending on the sorting algorithm.

This method is more efficient than the brute-force approach but still not optimal for all cases.

### 3. Hash Table Approach

Utilizing a hash table (or a set) allows us to track seen elements efficiently, providing a linear-time solution.

**Algorithm:**
1. Initialize an empty hash set.
2. Iterate through each element in the array `nums`.
3. For each element, check if it exists in the hash set.
    - If it does, return `true` (duplicate found).
    - If not, add the element to the hash set.
4. If no duplicates are found after the iteration, return `false`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)

**Space Complexity:** O(n)

This approach offers the most efficient time complexity by leveraging additional space to achieve linear time performance.

## Conclusion

The "Contains Duplicate" problem is a common coding interview question that assesses your ability to efficiently process and analyze data within an array. By exploring various approaches like the brute-force method, sorting technique, and hash table utilization, you can effectively determine the presence of duplicates and enhance your problem-solving skills.

Understanding these solutions not only aids in solving this specific problem but also builds a foundation for tackling more complex challenges involving arrays and data structures. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
