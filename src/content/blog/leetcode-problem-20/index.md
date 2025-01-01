---
title: "LeetCode Problem 20: Valid Parentheses - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Valid Parentheses' problem on LeetCode, including stack-based and hash map methods."
date: "2024-09-25"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Stack, Hash Map, String Manipulation]
---

LeetCode's Problem 20, "Valid Parentheses," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to efficiently analyze and manipulate strings to determine if they meet specific criteria. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the input string is **valid**.

An input string is valid if:

1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.

**Note:** An empty string is also considered valid.

**Example 1:**

Input: s = "()" Output: true

markdown
Copy code

**Example 2:**

Input: s = "()[]{}" Output: true

markdown
Copy code

**Example 3:**

Input: s = "(]" Output: false

markdown
Copy code

**Example 4:**

Input: s = "([)]" Output: false

markdown
Copy code

**Example 5:**

Input: s = "{[]}" Output: true

vbnet
Copy code

## Approach and Solutions

To solve this problem, we need to verify that every opening bracket has a corresponding closing bracket of the same type and that they are correctly nested. There are several approaches to achieve this, each with different time and space complexities.

### 1. Stack-Based Approach

The stack-based approach is the most intuitive and efficient method for solving this problem, achieving linear time complexity. This method involves using a stack to keep track of opening brackets and ensuring that each closing bracket matches the most recent opening bracket.

**Algorithm:**
1. **Initialize a Stack:** Create an empty stack to keep track of opening brackets.
2. **Create a Hash Map:** Map each closing bracket to its corresponding opening bracket for easy lookup.
3. **Iterate Through the String:**
    - If the current character is an opening bracket, push it onto the stack.
    - If it's a closing bracket:
        - If the stack is empty or the top of the stack doesn't match the corresponding opening bracket, return `false`.
        - Otherwise, pop the top of the stack.
4. **Final Check:** After processing all characters, if the stack is empty, return `true`; otherwise, return `false`.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def isValid(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}

    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    
    return not stack
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function isValid(s) {
    const stack = [];
    const mapping = {')': '(', '}': '{', ']': '['};

    for (let char of s) {
        if (char in mapping) {
            const top = stack.length === 0 ? '#' : stack.pop();
            if (mapping[char] !== top) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

This method efficiently checks for valid parentheses by leveraging the Last-In-First-Out (LIFO) property of stacks, ensuring that every closing bracket matches the most recent opening bracket.

### 2. Hash Map with Counter Approach

An alternative approach involves using a hash map to count the number of each type of bracket. However, this method is less efficient and doesn't account for the correct ordering of brackets, making it unsuitable for this problem. Therefore, the stack-based approach remains the preferred solution.

### 3. Using a Stack Without a Hash Map

If you prefer not to use a hash map, you can implement the stack-based approach by using conditional statements to handle each type of bracket.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def isValid(s):
    stack = []
    for char in s:
        if char == '(' or char == '{' or char == '[':
            stack.append(char)
        else:
            if not stack:
                return False
            top = stack.pop()
            if (char == ')' and top != '(') or \
               (char == '}' and top != '{') or \
               (char == ']' and top != '['):
                return False
    return not stack
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function isValid(s) {
    const stack = [];
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

This approach manually handles each type of bracket without relying on a hash map, achieving the same efficiency as the hash map method.

## Conclusion

The "Valid Parentheses" problem is a common coding interview question that evaluates your ability to analyze and manipulate strings efficiently under specific constraints. By exploring approaches like the stack-based method, you can determine the validity of a string containing various types of brackets with optimal time and space complexity.

Understanding these solutions not only aids in solving this specific problem but also builds a foundation for tackling more complex challenges involving string processing, data structure utilization, and algorithm design. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
