---
title: "LeetCode Problem 1: Two Sum - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Two Sum' problem on LeetCode, including brute force and hash table methods."
date: "Jun 17 2024"
draft: false
tags:
- Blind 75
- Algorithms
- Data Structures
---
<div id="container-8ff2f79bdea1e1b3abf97e1e8b6dd404"></div>
**Summary:** Explore various approaches to solving the 'Two Sum' problem on LeetCode, including brute force and hash table methods.

**Date:** Jun 17, 2024

**Tags:** Tutorial, LeetCode, Algorithms, Data Structures

## Introduction

LeetCode's Problem 1, "Two Sum," is one of the most fundamental and frequently asked problems in technical interviews. It introduces you to the concept of using data structures efficiently to solve problems that require a combination of iteration and condition checking. Let's dive into the problem, its solution, and key insights that can help you excel in coding interviews.

### Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**

```vbnet
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Approach and Solutions

To solve this problem, we need to find two numbers in the array that sum up to the given target. There are several approaches to achieve this, each with different time and space complexities.

### 1. Brute Force Approach

The simplest way to solve this problem is by using two nested loops to check every pair of numbers and see if they sum up to the target.

**Algorithm:**

- Iterate through each element in the array.
- For each element, iterate through the rest of the array to find if there is another number that adds up to the target.
- If a pair is found, return their indices.

<details>
<summary>Python Solution</summary>
<div class="code-container">
    <pre><code class="language-python">def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]</code></pre>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>
</details>

<details>
<summary>JavaScript Solution</summary>
<div class="code-container">
    <pre><code class="language-javascript">function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}</code></pre>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>
</details>

**Time Complexity:** `O(n^2)`

**Space Complexity:** `O(1)`

While this approach is straightforward, it is not efficient for large datasets due to its quadratic time complexity.

### 2. Two-Pass Hash Table

To optimize the solution, we can use a hash table to store the numbers and their indices. This way, we can check if the complement (i.e., `target - num`) exists in the hash table as we iterate through the array.

**Algorithm:**

- Create a hash table to store the numbers and their indices.
- Iterate through the array and populate the hash table.
- Iterate through the array again, for each number, check if the complement exists in the hash table.
- If it exists and is not the same element, return their indices.

<details>
<summary>Python Solution</summary>
<div class="code-container">
    <pre><code class="language-python">def twoSum(nums, target):
    hash_table = {}
    for i, num in enumerate(nums):
        hash_table[num] = i
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_table and hash_table[complement] != i:
            return [i, hash_table[complement]]</code></pre>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>
</details>

<details>
<summary>JavaScript Solution</summary>
<div class="code-container">
    <pre><code class="language-javascript">function twoPassHashTable(nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        hashTable[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hashTable.hasOwnProperty(complement) && hashTable[complement] !== i) {
            return [i, hashTable[complement]];
        }
    }
}</code></pre>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>
</details>

**Time Complexity:** `O(n)`

**Space Complexity:** `O(n)`

This approach is more efficient, reducing the time complexity to linear.

### 3. One-Pass Hash Table

We can further optimize the solution by combining the two passes into one. As we iterate through the array, we can simultaneously check if the complement exists in the hash table and update the hash table with the current number.

**Algorithm:**

- Initialize an empty hash table.
- Iterate through the array.
- For each number, calculate the complement.
- If the complement exists in the hash table, return the current index and the index of the complement.
- Otherwise, add the current number and its index to the hash table.

<details>
<summary>Python Solution</summary>
<div class="code-container">
    <pre><code class="language-python">def twoSum(nums, target):
    hash_table = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_table:
            return [hash_table[complement], i]
        hash_table[num] = i</code></pre>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>
</details>

<details>
<summary>JavaScript Solution</summary>
<div class="code-container">
    <pre><code class="language-javascript">function onePassHashTable(nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hashTable.hasOwnProperty(complement)) {
            return [hashTable[complement], i];
        }
        hashTable[nums[i]] = i;
    }
}</code></pre>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>
</details>

**Time Complexity:** `O(n)`

**Space Complexity:** `O(n)`

This approach is the most efficient in terms of both time and space, making it ideal for large datasets.

## Conclusion

The "Two Sum" problem is a classic example of how different approaches can be applied to solve a problem, each with its own trade-offs. The brute force approach is easy to understand but inefficient, while the hash table approaches provide efficient solutions with linear time complexity.

Understanding these solutions not only helps in solving this specific problem but also builds a foundation for tackling more complex problems involving arrays and hash maps. By mastering the efficient use of data structures, you can significantly improve your problem-solving skills and performance in coding interviews.

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