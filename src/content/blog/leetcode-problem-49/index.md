---
title: "LeetCode Problem 49: Group Anagrams - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Group Anagrams' problem on LeetCode, including sorting and hash table methods."
date: "2024-08-05"
draft: false
tags: [Blind 75, LeetCode, Algorithms, Data Structures, Hash Table, Sorting, Counting]
---

LeetCode's Problem 49, "Group Anagrams," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to categorize and organize data efficiently by identifying anagrams within a list of strings. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

markdown
Copy code

**Example 2:**

Input: strs = [""] Output: [[""]]

markdown
Copy code

**Example 3:**

Input: strs = ["a"] Output: [["a"]]

typescript
Copy code

## Approach and Solutions

To solve this problem, we need to group strings that are anagrams of each other. There are several approaches to achieve this, each with different time and space complexities.

### 1. Sorting Approach

The sorting approach involves sorting each string alphabetically and using the sorted string as a key in a hash map. Anagrams, when sorted, will result in identical strings, allowing us to group them together.

**Algorithm:**
1. Initialize an empty dictionary (or object) to store grouped anagrams.
2. Iterate through each string in the input array `strs`.
3. For each string, sort its characters alphabetically.
4. Use the sorted string as a key in the dictionary and append the original string to the corresponding list.
5. After processing all strings, return the values of the dictionary, which are the grouped anagrams.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def groupAnagrams(strs):
    from collections import defaultdict
    anagrams = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        anagrams[key].append(s)
    return list(anagrams.values())
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function groupAnagrams(strs) {
    const anagrams = {};
    for (let s of strs) {
        const key = s.split('').sort().join('');
        if (!anagrams[key]) {
            anagrams[key] = [];
        }
        anagrams[key].push(s);
    }
    return Object.values(anagrams);
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n * k log k), where `n` is the number of strings and `k` is the maximum length of a string. Sorting each string takes O(k log k) time.

**Space Complexity:** O(n * k), as we store all strings in the hash map.

This method is straightforward and easy to implement but involves sorting, which increases the time complexity, especially for longer strings.

### 2. Hash Table (Counting) Approach

The hash table approach involves counting the frequency of each character in the strings and using these counts as keys. Since anagrams have identical character counts, they will be grouped together.

**Algorithm:**
1. Initialize an empty dictionary (or object) to store grouped anagrams.
2. Iterate through each string in the input array `strs`.
3. For each string, create a count of each character.
4. Convert the count into a tuple (or a string) to use as a key in the dictionary.
5. Append the original string to the corresponding list in the dictionary.
6. After processing all strings, return the values of the dictionary, which are the grouped anagrams.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def groupAnagrams(strs):
    from collections import defaultdict
    anagrams = defaultdict(list)
    for s in strs:
        count = [0] * 26  # Assuming only lowercase letters
        for char in s:
            count[ord(char) - ord('a')] += 1
        key = tuple(count)
        anagrams[key].append(s)
    return list(anagrams.values())
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function groupAnagrams(strs) {
    const anagrams = {};
    for (let s of strs) {
        const count = Array(26).fill(0);
        for (let char of s) {
            count[char.charCodeAt(0) - 97]++;
        }
        const key = count.join('#');
        if (!anagrams[key]) {
            anagrams[key] = [];
        }
        anagrams[key].push(s);
    }
    return Object.values(anagrams);
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n * k), where `n` is the number of strings and `k` is the maximum length of a string. Counting characters takes linear time.

**Space Complexity:** O(n * k), as we store all strings in the hash map.

This method is more efficient than the sorting approach as it avoids the overhead of sorting each string, achieving linear time complexity.

### 3. Prime Number Multiplication Approach

Another innovative approach involves mapping each character to a unique prime number and computing the product of these primes for each string. Since the product of primes is unique for each unique combination of characters, anagrams will result in the same product, allowing us to group them together.

**Algorithm:**
1. Assign a unique prime number to each lowercase English letter.
2. Initialize an empty dictionary (or object) to store grouped anagrams.
3. Iterate through each string in the input array `strs`.
4. For each string, compute the product of primes corresponding to its characters.
5. Use the computed product as a key in the dictionary and append the original string to the corresponding list.
6. After processing all strings, return the values of the dictionary, which are the grouped anagrams.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def groupAnagrams(strs):
    from collections import defaultdict
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    anagrams = defaultdict(list)
    for s in strs:
        product = 1
        for char in s:
            product *= primes[ord(char) - ord('a')]
        anagrams[product].append(s)
    return list(anagrams.values())
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function groupAnagrams(strs) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    const anagrams = {};
    for (let s of strs) {
        let product = 1;
        for (let char of s) {
            product *= primes[char.charCodeAt(0) - 97];
        }
        if (!anagrams[product]) {
            anagrams[product] = [];
        }
        anagrams[product].push(s);
    }
    return Object.values(anagrams);
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n * k), where `n` is the number of strings and `k` is the maximum length of a string.

**Space Complexity:** O(n * k), as we store all strings in the hash map.

**Note:** This approach assumes that the product of primes will not cause integer overflow. In languages like Python, which handle large integers gracefully, this is not an issue. However, in languages with fixed integer sizes like JavaScript, this might lead to incorrect results for longer strings.

This method offers a unique way to group anagrams by leveraging the fundamental theorem of arithmetic, ensuring that each group of anagrams has a unique key.

## Conclusion

The "Group Anagrams" problem is a common coding interview question that evaluates your ability to categorize and organize data efficiently. By exploring various approaches like the sorting method, hash table counting, and prime number multiplication, you can group anagrams effectively with varying degrees of efficiency.

Understanding these solutions not only helps in solving this specific problem but also builds a foundation for tackling more complex challenges involving string manipulation, hashing, and mathematical optimizations. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
