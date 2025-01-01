---
title: "LeetCode Problem 11: Container With Most Water - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Container With Most Water' problem on LeetCode, including the two-pointer and brute-force methods."
date: "2024-08-30"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Two Pointers, Array]
---

LeetCode's Problem 11, "Container With Most Water," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate arrays to identify optimal solutions based on specific constraints. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the line `i` are at `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

**Note:** You may not slant the container.

**Example 1:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: height = [1,8,6,2,5,4,8,3,7]  
Output: 49
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 2:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: height = [1,1]  
Output: 1
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 3:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: height = [4,3,2,1,4]  
Output: 16
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

## Approach and Solutions

To solve this problem, we need to identify the two lines that, together with the x-axis, form a container holding the maximum amount of water. The amount of water is determined by the shorter of the two lines and the distance between them. There are several approaches to achieve this, each with different time and space complexities.

### 1. Two-Pointer Approach

The two-pointer approach is the most efficient method for solving this problem, achieving a linear time complexity. This method involves using two pointers that start at both ends of the array and move towards each other based on specific conditions.

**Algorithm:**
1. **Initialize Pointers:** Start with two pointers, `left` at the beginning of the array and `right` at the end.
2. **Calculate Area:** At each step, calculate the area formed by the lines at the `left` and `right` pointers.
3. **Update Maximum Area:** Keep track of the maximum area found so far.
4. **Move Pointers:** Move the pointer pointing to the shorter line inward, as moving the longer line inward cannot result in a larger area.
5. **Repeat:** Continue the process until the `left` and `right` pointers meet.
6. **Return Maximum Area:** The maximum area recorded is the solution.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    while left < right:
        # Calculate the area with the current pair of lines
        width = right - left
        current_height = min(height[left], height[right])
        current_area = width * current_height
        max_area = max(max_area, current_area)

        # Move the pointer pointing to the shorter line
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        // Calculate the area with the current pair of lines
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

This method efficiently finds the maximum area by leveraging the fact that moving the shorter line inward may lead to a larger area.

### 2. Brute-Force Approach

The brute-force approach involves checking all possible pairs of lines and calculating the area for each pair. While simple to implement, this method is inefficient for large datasets due to its quadratic time complexity.

**Algorithm:**
1. **Initialize Maximum Area:** Start with a variable to keep track of the maximum area found.
2. **Iterate Through All Pairs:** Use two nested loops to consider every possible pair of lines.
3. **Calculate Area:** For each pair, calculate the area formed by the lines and update the maximum area if necessary.
4. **Return Maximum Area:** After checking all pairs, return the maximum area recorded.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def maxArea(height):
    max_area = 0
    n = len(height)
    for i in range(n):
        for j in range(i + 1, n):
            current_area = (j - i) * min(height[i], height[j])
            max_area = max(max_area, current_area)
    return max_area
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function maxArea(height) {
    let maxArea = 0;
    const n = height.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const currentArea = (j - i) * Math.min(height[i], height[j]);
            maxArea = Math.max(maxArea, currentArea);
        }
    }
    return maxArea;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n²)  
**Space Complexity:** O(1)

This approach is not recommended for large inputs but can be useful for understanding the problem's fundamentals.

### 3. Dynamic Programming Approach (Not Recommended)

While dynamic programming is a powerful technique for many problems, it doesn't offer a significant advantage for this specific problem compared to the two-pointer approach. Therefore, it's generally not used for solving the "Container With Most Water" problem.

## Conclusion

The "Container With Most Water" problem is a common coding interview question that evaluates your ability to analyze and manipulate arrays efficiently under specific constraints. By exploring various approaches like the two-pointer technique and the brute-force method, you can determine the optimal solution with varying degrees of efficiency and complexity.

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
