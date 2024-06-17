---
title: "LeetCode Problem 15: 3Sum - A Comprehensive Guide"
summary: "Explore various approaches to solving the '3Sum' problem on LeetCode, including two-pointer technique and hash table methods."
date: "2024-06-17"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Hash Table, Two-Pointer]

---

# LeetCode Problem 15: 3Sum - A Comprehensive Guide

LeetCode's Problem 15, "3Sum," is a classic problem frequently encountered in technical interviews. It challenges your ability to find all unique triplets in an array whose sum is equal to a given target value. Let's explore the problem, various solutions, and key insights to excel in coding interviews.

## Problem Statement

Given an array of integers `nums`, return all the unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

**Note:** The solution set must not contain duplicate triplets.

**Example:**

```
Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
Explanation: The sum of the three integers in each triplet is equal to zero.
```

## Approach and Solutions

To solve this problem, we need to find all unique triplets that sum up to zero in the given array. There are several approaches to achieve this, each with different time and space complexities.

### 1. Two-Pointer Technique

The two-pointer technique is an efficient approach to solve the 3Sum problem. It involves sorting the array first and then using two pointers to iterate through the array while maintaining a left and right boundary.

**Algorithm:**
1. Sort the array.
2. Iterate through the array with the first pointer `i`.
3. For each element at index `i`, use two pointers `left` and `right` to find the remaining two elements that sum up to the target.
4. Adjust the pointers accordingly based on the sum of the triplet.

<details>
<summary>Python Solution</summary>

<div class="code-container">
   <pre><code class="language-python">
def threeSum(nums):
    nums.sort()
    result = []
    n = len(nums)

    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1

    return result

</code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</details>

<details>
<summary>JavaScript Solution</summary>

<div class="code-container">
   <pre><code class="language-python">
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1, right = n - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }

    return result;
}

</code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</details>

**Time Complexity:** O(n^2)
**Space Complexity:** O(1)

This approach efficiently finds all unique triplets that sum up to zero by utilizing the two-pointer technique.

### 2. Hash Table Approach

Another approach to solving the 3Sum problem involves using a hash table to store complement values. This method is useful when the array elements have a wider range.

**Algorithm:**
1. Initialize an empty hash table.
2. Iterate through the array with the first pointer `i`.
3. For each element at index `i`, iterate through the array again with a second pointer `j`.
4. Calculate the complement for each pair of elements and check if it exists in the hash table.
5. If found, add the triplet to the result set.

<details>
<summary>Python Solution</summary>

<div class="code-container">
   <pre><code class="language-python">
def threeSum(nums):
    result = []
    nums.sort()
    n = len(nums)

    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        target = -nums[i]
        hash_table = {}
        for j in range(i + 1, n):
            complement = target - nums[j]
            if complement in hash_table:
                result.append([nums[i], complement, nums[j]])
                while j + 1 < n and nums[j] == nums[j + 1]:
                    j += 1
            hash_table[nums[j]] = j

    return result

</code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</details>

<details>
<summary>JavaScript Solution</summary>

<div class="code-container">
   <pre><code class="language-python">function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        const target = -nums[i];
        const hashTable = {};
        for (let j = i + 1; j < n; j++) {
            const complement = target - nums[j];
            if (hashTable.hasOwnProperty(complement)) {
                result.push([nums[i], complement, nums[j]]);
                while (j + 1 < n && nums[j] === nums[j + 1]) {
                    j++;
                }
            }
            hashTable[nums[j]] = j;
        }
    }

    return result;
}</code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>


</details>

**Time Complexity:** O(n^2)
**Space Complexity:** O(n)

This approach utilizes a hash table to efficiently find all unique triplets that sum up to zero.

## Conclusion

The "3Sum" problem is a common coding interview question that challenges your understanding of array manipulation and algorithmic techniques. By exploring various approaches like the two-pointer technique and hash table methods, you can effectively solve this problem and improve your problem-solving skills.

Understanding these solutions not only helps in solving this specific problem but also builds a foundation for tackling more complex problems involving arrays and data structures. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
