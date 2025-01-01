---
title: "LeetCode Problem 121: Best Time to Buy and Sell Stock - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Best Time to Buy and Sell Stock' problem on LeetCode, including brute-force and dynamic programming methods."
date: "2024-09-10"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Dynamic Programming, Greedy, Array]
---

LeetCode's Problem 121, "Best Time to Buy and Sell Stock," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate arrays to identify optimal solutions based on specific constraints. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return `0`.

**Example 1:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: prices = [7,1,5,3,6,4]  
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not buy on day 1 (price = 7) and sell on day 2 (price = 1), profit = 1-7 = -6, which is worse.
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 2:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: prices = [7,6,4,3,1]  
Output: 0
Explanation: In this case, no transactions are done, i.e., max profit = 0.
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Example 3:**

<div class="code-container">
   <pre><code class="language-plaintext">
Input: prices = [3,3,5,0,0,3,1,4]  
Output: 4
Explanation: Buy on day 4 (price = 0) and sell on day 7 (price = 4), profit = 4-0 = 4.
   </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

## Approach and Solutions

To solve this problem, we need to identify the best days to buy and sell stock to maximize profit. There are several approaches to achieve this, each with different time and space complexities.

### 1. Brute-Force Approach

The brute-force method involves checking all possible pairs of buy and sell days to find the maximum profit. While simple to implement, this approach is inefficient for large datasets due to its high time complexity.

**Algorithm:**
1. Initialize a variable `max_profit` to `0`.
2. Iterate through each day `i` as the buying day.
3. For each buying day `i`, iterate through each day `j` after `i` as the selling day.
4. Calculate the profit `prices[j] - prices[i]`.
5. If the calculated profit is greater than `max_profit`, update `max_profit`.
6. After checking all pairs, return `max_profit`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def maxProfit(prices):
    max_profit = 0
    n = len(prices)
    for i in range(n):
        for j in range(i + 1, n):
            profit = prices[j] - prices[i]
            if profit > max_profit:
                max_profit = profit
    return max_profit
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function maxProfit(prices) {
    let maxProfit = 0;
    const n = prices.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n²)  
**Space Complexity:** O(1)

This approach is straightforward but highly inefficient for large inputs due to its quadratic time complexity.

### 2. One-Pass (Greedy) Approach

The one-pass approach utilizes a single traversal of the array to keep track of the minimum price encountered so far and the maximum profit that can be achieved by selling on the current day.

**Algorithm:**
1. Initialize two variables:
    - `min_price` to a very large number (e.g., `infinity`).
    - `max_profit` to `0`.
2. Iterate through each price in the array:
    - If the current price is less than `min_price`, update `min_price`.
    - Else, calculate the profit `current_price - min_price`.
    - If the calculated profit is greater than `max_profit`, update `max_profit`.
3. After traversing the array, return `max_profit`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    return max_profit
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

This approach is highly efficient as it only requires a single pass through the array with constant extra space.

### 3. Dynamic Programming Approach

While the one-pass approach is optimal, the dynamic programming (DP) approach offers a different perspective by breaking down the problem into subproblems.

**Algorithm:**
1. Initialize two arrays:
    - `dp_buy`: where `dp_buy[i]` represents the minimum price up to day `i`.
    - `dp_profit`: where `dp_profit[i]` represents the maximum profit up to day `i`.
2. Iterate through the array starting from the first day:
    - Update `dp_buy[i]` as the minimum of `dp_buy[i-1]` and `prices[i]`.
    - Update `dp_profit[i]` as the maximum of `dp_profit[i-1]` and `prices[i] - dp_buy[i]`.
3. After filling the arrays, the last element in `dp_profit` will be the maximum profit.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def maxProfit(prices):
    if not prices:
        return 0
    n = len(prices)
    dp_buy = [0] * n
    dp_profit = [0] * n
    dp_buy[0] = prices[0]
    dp_profit[0] = 0
    for i in range(1, n):
        dp_buy[i] = min(dp_buy[i-1], prices[i])
        dp_profit[i] = max(dp_profit[i-1], prices[i] - dp_buy[i])
    return dp_profit[-1]
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function maxProfit(prices) {
    if (prices.length === 0) return 0;
    const n = prices.length;
    const dp_buy = Array(n).fill(0);
    const dp_profit = Array(n).fill(0);
    dp_buy[0] = prices[0];
    dp_profit[0] = 0;
    for (let i = 1; i < n; i++) {
        dp_buy[i] = Math.min(dp_buy[i - 1], prices[i]);
        dp_profit[i] = Math.max(dp_profit[i - 1], prices[i] - dp_buy[i]);
    }
    return dp_profit[n - 1];
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

While the DP approach achieves linear time complexity, it requires additional space for the `dp_buy` and `dp_profit` arrays, making the one-pass approach more space-efficient.

## Conclusion

The "Best Time to Buy and Sell Stock" problem is a common coding interview question that evaluates your ability to analyze and manipulate arrays efficiently under specific constraints. By exploring various approaches like the brute-force method, one-pass (greedy) technique, and dynamic programming, you can determine the optimal solution with varying degrees of efficiency and complexity.

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
