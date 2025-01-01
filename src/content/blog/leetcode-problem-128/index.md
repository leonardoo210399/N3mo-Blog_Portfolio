---
title: "LeetCode Problem 128: Longest Consecutive Sequence - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Longest Consecutive Sequence' problem on LeetCode, including sorting and hash set methods."
date: "2024-08-25"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Hash Set, Sorting, Array]
---

LeetCode's Problem 128, "Longest Consecutive Sequence," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate arrays to identify sequences based on specific criteria. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

**Example 1:**

Input: nums = [100,4,200,1,3,2] Output: 4 Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

markdown
Copy code

**Example 2:**

Input: nums = [0,3,7,2,5,8,4,6,0,1] Output: 9 Explanation: The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.

markdown
Copy code

**Example 3:**

Input: nums = [] Output: 0

javascript
Copy code

## Approach and Solutions

To solve this problem, we need to identify the longest sequence of consecutive integers present in the array. There are several approaches to achieve this, each with different time and space complexities.

### 1. Sorting Approach

The sorting approach involves first sorting the array and then iterating through it to find the longest consecutive sequence. This method is straightforward but involves sorting, which affects the time complexity.

**Algorithm:**
1. **Sort the Array:** Sort the input array `nums` in ascending order.
2. **Initialize Counters:**
    - `max_length` to keep track of the maximum sequence length found.
    - `current_length` to keep track of the current sequence length.
3. **Iterate Through the Array:**
    - If the current element is exactly one greater than the previous element, increment `current_length`.
    - If it's the same as the previous element, continue (to handle duplicates).
    - Otherwise, reset `current_length` to 1.
    - Update `max_length` if `current_length` is greater.
4. **Return `max_length`** after completing the iteration.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def longestConsecutive(nums):
    if not nums:
        return 0
    nums.sort()
    max_length = 1
    current_length = 1
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1] + 1:
            current_length += 1
        elif nums[i] != nums[i - 1]:
            current_length = 1
        max_length = max(max_length, current_length)
    return max_length
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    let maxLength = 1;
    let currentLength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            currentLength += 1;
        } else if (nums[i] !== nums[i - 1]) {
            currentLength = 1;
        }
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    return maxLength;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n log n) due to the sorting step.

**Space Complexity:** O(1) or O(n) depending on the sorting algorithm used.

This method is straightforward and easy to implement but does not meet the optimal O(n) time requirement.

### 2. Hash Set Approach

The hash set approach leverages a hash set for O(1) lookups to achieve an optimal O(n) time complexity. This method efficiently identifies the start of each potential sequence and extends it as far as possible.

**Algorithm:**
1. **Create a Hash Set:** Insert all elements of `nums` into a hash set for O(1) access.
2. **Initialize `max_length`** to keep track of the maximum sequence length found.
3. **Iterate Through the Array:**
    - For each element `num`, check if `num - 1` is not in the set. If it's not, `num` is the start of a sequence.
    - Initialize a `current_num` to `num` and a `current_length` to 1.
    - While `current_num + 1` exists in the set, increment `current_num` and `current_length`.
    - Update `max_length` if `current_length` is greater.
4. **Return `max_length`** after completing the iteration.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def longestConsecutive(nums):
    num_set = set(nums)
    max_length = 0
    for num in num_set:
        if num - 1 not in num_set:
            current_num = num
            current_length = 1
            while current_num + 1 in num_set:
                current_num += 1
                current_length += 1
            max_length = max(max_length, current_length)
    return max_length
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let maxLength = 0;
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        }
    }
    return maxLength;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)

**Space Complexity:** O(n)

This method efficiently identifies and extends sequences by leveraging the hash set for constant-time lookups, achieving the optimal O(n) time complexity.

### 3. Union-Find Approach

The Union-Find (Disjoint Set Union) approach can also be used to solve this problem by connecting consecutive elements. However, this method is generally less efficient compared to the hash set approach and is not commonly used for this specific problem.

**Algorithm:**
1. **Initialize Union-Find Structure:** Create a parent and rank array.
2. **Union Consecutive Elements:** For each element, if `num + 1` exists, union `num` and `num + 1`.
3. **Find the Size of Each Set:** After all unions, determine the size of each connected component.
4. **Return the Maximum Size:** The largest set size corresponds to the longest consecutive sequence.

**Note:** Due to its higher complexity and overhead, the Union-Find approach is generally not preferred for this problem.

## Conclusion

The "Longest Consecutive Sequence" problem is a common coding interview question that evaluates your ability to analyze and manipulate arrays efficiently. By exploring various approaches like the sorting method and the hash set technique, you can identify the longest sequence of consecutive integers with varying degrees of efficiency.

Understanding these solutions not only aids in solving this specific problem but also builds a foundation for tackling more complex challenges involving array manipulation, optimization, and algorithm design. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
