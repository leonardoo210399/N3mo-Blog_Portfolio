---
title: "LeetCode Problem 238: Product of Array Except Self - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Product of Array Except Self' problem on LeetCode, including prefix-suffix product and optimized space methods."
date: "2024-08-20"
draft: false
tags: [Blind 75, LeetCode, Algorithms, Data Structures, Array, Prefix-Suffix, Optimization]
---

LeetCode's Problem 238, "Product of Array Except Self," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to manipulate arrays efficiently to compute products while adhering to specific constraints. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given an integer array `nums`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

**Example 1:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 2:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

## Approach and Solutions

To solve this problem, we need to compute the product of all elements except the one at the current index without using division and in O(n) time. There are several approaches to achieve this, each with different time and space complexities.

### 1. Prefix and Suffix Product Approach

The prefix and suffix product approach involves computing the product of all elements to the left of each index and the product of all elements to the right of each index. The final output for each index is the product of its corresponding prefix and suffix products.

**Algorithm:**
1. **Initialize Arrays:**
    - Create two arrays, `prefix` and `suffix`, of the same length as `nums`.
    - Set `prefix[0] = 1` and `suffix[-1] = 1` because there are no elements to the left of the first element and no elements to the right of the last element.
2. **Compute Prefix Products:**
    - Iterate from left to right, computing the product of all elements to the left of the current index.
    - `prefix[i] = prefix[i-1] * nums[i-1]`
3. **Compute Suffix Products:**
    - Iterate from right to left, computing the product of all elements to the right of the current index.
    - `suffix[i] = suffix[i+1] * nums[i+1]`
4. **Compute Output:**
    - For each index `i`, set `output[i] = prefix[i] * suffix[i]`

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def productExceptSelf(nums):
    n = len(nums)
    prefix = [1] * n
    suffix = [1] * n
    output = [1] * n

    # Compute prefix products
    for i in range(1, n):
        prefix[i] = prefix[i - 1] * nums[i - 1]
    
    # Compute suffix products
    for i in range(n - 2, -1, -1):
        suffix[i] = suffix[i + 1] * nums[i + 1]
    
    # Compute output
    for i in range(n):
        output[i] = prefix[i] * suffix[i]
    
    return output
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function productExceptSelf(nums) {
    const n = nums.length;
    const prefix = Array(n).fill(1);
    const suffix = Array(n).fill(1);
    const output = Array(n).fill(1);

    // Compute prefix products
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    // Compute suffix products
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    // Compute output
    for (let i = 0; i < n; i++) {
        output[i] = prefix[i] * suffix[i];
    }
    
    return output;
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)

**Space Complexity:** O(n)

This method is straightforward and easy to implement but requires additional space for the prefix and suffix arrays.

### 2. Optimized Space Approach

The optimized space approach leverages the output array to store the prefix products and computes the suffix products on the fly, thus reducing the space complexity to O(1) (excluding the output array).

**Algorithm:**
1. **Initialize Output Array:**
    - Create an output array `output` of the same length as `nums` and set `output[0] = 1`.
2. **Compute Prefix Products in Output Array:**
    - Iterate from left to right, updating the output array with the product of all elements to the left of each index.
    - `output[i] = output[i-1] * nums[i-1]`
3. **Compute Suffix Products on the Fly and Multiply with Prefix:**
    - Initialize a variable `suffix` to 1.
    - Iterate from right to left, updating `suffix` with the product of all elements to the right of each index.
    - Multiply `output[i]` with `suffix` to get the final product except self.
    - `output[i] *= suffix`
    - Update `suffix` with `nums[i]`

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def productExceptSelf(nums):
    n = len(nums)
    output = [1] * n

    # Compute prefix products in output
    for i in range(1, n):
        output[i] = output[i - 1] * nums[i - 1]
    
    # Compute suffix products and multiply with prefix
    suffix = 1
    for i in range(n - 1, -1, -1):
        output[i] *= suffix
        suffix *= nums[i]
    
    return output
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function productExceptSelf(nums) {
    const n = nums.length;
    const output = Array(n).fill(1);

    // Compute prefix products in output
    for (let i = 1; i < n; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    
    // Compute suffix products and multiply with prefix
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }
    
    return output;
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)

**Space Complexity:** O(1)

This optimized approach reduces the space usage by reusing the output array to store prefix products and calculating suffix products on the fly without additional arrays.

## Conclusion

The "Product of Array Except Self" problem is a common coding interview question that evaluates your ability to manipulate and analyze arrays efficiently under specific constraints. By exploring various approaches like the prefix-suffix product method and the optimized space technique, you can compute the desired output effectively while adhering to time and space complexity requirements.

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
