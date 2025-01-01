---
title: "LeetCode Problem 347: Top K Frequent Elements - A Comprehensive Guide"
summary: "Explore various approaches to solving the 'Top K Frequent Elements' problem on LeetCode, including heap and bucket sort methods."
date: "2024-08-10"
draft: false
tags: [LeetCode, Algorithms, Data Structures, Heap, Hash Table, Sorting]
---

LeetCode's Problem 347, "Top K Frequent Elements," is a fundamental problem frequently encountered in technical interviews. It assesses your ability to identify and group elements based on their frequency efficiently. Let's delve into the problem, explore multiple solutions, and uncover key insights to excel in coding interviews.

## Problem Statement

Given a non-empty array of integers `nums`, return the `k` most frequent elements.

**Example 1:**

Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2]

markdown
Copy code

**Example 2:**

Input: nums = [1], k = 1 Output: [1]

markdown
Copy code

**Example 3:**

Input: nums = [4,1,-1,2,-1,2,3], k = 2 Output: [-1,2]

scss
Copy code

## Approach and Solutions

To solve this problem, we need to identify the top `k` elements that appear most frequently in the array. There are several approaches to achieve this, each with different time and space complexities.

### 1. Heap (Priority Queue) Approach

The heap approach involves using a min-heap (priority queue) to keep track of the top `k` frequent elements. This method efficiently maintains the `k` most frequent elements without sorting the entire frequency map.

**Algorithm:**
1. **Frequency Map:** Create a hash map to count the frequency of each element in `nums`.
2. **Min-Heap:** Initialize a min-heap that will store pairs of `(frequency, element)`.
3. **Populate Heap:** Iterate through the frequency map and add each `(frequency, element)` pair to the heap.
    - If the heap size exceeds `k`, remove the smallest frequency element.
4. **Extract Results:** Extract the elements from the heap to get the top `k` frequent elements.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
import heapq
from collections import Counter

def topKFrequent(nums, k):
count = Counter(nums)
heap = []
for num, freq in count.items():
heapq.heappush(heap, (freq, num))
if len(heap) > k:
heapq.heappop(heap)
return [num for freq, num in heap]
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function topKFrequent(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const heap = new MinHeap();
    for (let num in count) {
        heap.push({ num: parseInt(num), freq: count[num] });
        if (heap.size() > k) {
            heap.pop();
        }
    }
    const result = [];
    while (heap.size() > 0) {
        result.push(heap.pop().num);
    }
    return result;
}

// MinHeap implementation
class MinHeap {
constructor() {
this.heap = [];
}
size() {
return this.heap.length;
}
push(item) {
this.heap.push(item);
this.bubbleUp(this.heap.length - 1);
}
pop() {
if (this.size() === 0) return null;
const top = this.heap[0];
const end = this.heap.pop();
if (this.size() > 0) {
this.heap[0] = end;
this.bubbleDown(0);
}
return top;
}
bubbleUp(index) {
while (index > 0) {
let parent = Math.floor((index - 1) / 2);
if (this.heap[parent].freq <= this.heap[index].freq) break;
[this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
index = parent;
}
}
bubbleDown(index) {
const length = this.heap.length;
while (true) {
let left = 2 * index + 1;
let right = 2 * index + 2;
let smallest = index;
if (left < length && this.heap[left].freq < this.heap[smallest].freq) {
smallest = left;
}
if (right < length && this.heap[right].freq < this.heap[smallest].freq) {
smallest = right;
}
if (smallest === index) break;
[this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
index = smallest;
}
}
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n log k)

**Space Complexity:** O(n)

This approach is efficient for large datasets as it avoids sorting the entire frequency map, maintaining only the top `k` elements in the heap.

### 2. Bucket Sort Approach

The bucket sort approach leverages the fact that the frequency of elements ranges from `1` to `n` (where `n` is the number of elements in `nums`). By creating buckets for each frequency, we can group elements and then iterate through the buckets in descending order to extract the top `k` frequent elements.

**Algorithm:**
1. **Frequency Map:** Create a hash map to count the frequency of each element in `nums`.
2. **Buckets:** Initialize an array of empty lists, where the index represents the frequency.
3. **Populate Buckets:** Iterate through the frequency map and append each element to the corresponding frequency bucket.
4. **Collect Results:** Traverse the buckets from high to low frequency and collect the elements until we have `k` elements.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
def topKFrequent(nums, k):
    from collections import defaultdict
    count = defaultdict(int)
    for num in nums:
        count[num] += 1
    max_freq = max(count.values())
    buckets = [[] for _ in range(max_freq + 1)]
    for num, freq in count.items():
        buckets[freq].append(num)
    result = []
    for freq in range(max_freq, 0, -1):
        for num in buckets[freq]:
            result.append(num)
            if len(result) == k:
                return result
    return result
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function topKFrequent(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    let maxFreq = 0;
    for (let num in count) {
        if (count[num] > maxFreq) {
            maxFreq = count[num];
        }
    }
    const buckets = Array.from({ length: maxFreq + 1 }, () => []);
    for (let num in count) {
        buckets[count[num]].push(parseInt(num));
    }
    const result = [];
    for (let freq = maxFreq; freq >= 1; freq--) {
        for (let num of buckets[freq]) {
            result.push(num);
            if (result.length === k) {
                return result;
            }
        }
    }
    return result;
}
    </code></pre>
   <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n)

**Space Complexity:** O(n)

This method is highly efficient as it eliminates the need for sorting by directly grouping elements based on their frequencies.

### 3. QuickSelect Approach

The QuickSelect approach is inspired by the QuickSort algorithm and involves partitioning the elements based on their frequencies to find the top `k` elements. This method can achieve an average time complexity of O(n).

**Algorithm:**
1. **Frequency Map:** Create a hash map to count the frequency of each element in `nums`.
2. **Unique Elements List:** Extract the unique elements from the frequency map.
3. **QuickSelect:** Use the QuickSelect algorithm to partition the unique elements such that the top `k` frequent elements are identified.
4. **Return Results:** Extract and return the top `k` frequent elements.

#### Python Solution

<div class="code-container">
   <pre><code class="language-python">
import random

def topKFrequent(nums, k):
count = {}
for num in nums:
count[num] = count.get(num, 0) + 1
unique = list(count.keys())

    def quickSelect(left, right, k_smallest):
        if left == right:
            return
        pivot_index = random.randint(left, right)
        pivot_index = partition(left, right, pivot_index)
        if k_smallest == pivot_index:
            return
        elif k_smallest < pivot_index:
            quickSelect(left, pivot_index - 1, k_smallest)
        else:
            quickSelect(pivot_index + 1, right, k_smallest)
    
    def partition(left, right, pivot_index):
        pivot_freq = count[unique[pivot_index]]
        unique[pivot_index], unique[right] = unique[right], unique[pivot_index]
        store_index = left
        for i in range(left, right):
            if count[unique[i]] > pivot_freq:
                unique[store_index], unique[i] = unique[i], unique[store_index]
                store_index += 1
        unique[right], unique[store_index] = unique[store_index], unique[right]
        return store_index
    
    quickSelect(0, len(unique) - 1, k - 1)
    return unique[:k]
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

#### JavaScript Solution

<div class="code-container">
   <pre><code class="language-javascript">
function topKFrequent(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const unique = Object.keys(count).map(Number);

    function quickSelect(left, right, k_smallest) {
        if (left === right) return;
        const pivot_index = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivot_new_index = partition(left, right, pivot_index);
        if (k_smallest === pivot_new_index) {
            return;
        } else if (k_smallest < pivot_new_index) {
            quickSelect(left, pivot_new_index - 1, k_smallest);
        } else {
            quickSelect(pivot_new_index + 1, right, k_smallest);
        }
    }
    
    function partition(left, right, pivot_index) {
        const pivot_freq = count[unique[pivot_index]];
        [unique[pivot_index], unique[right]] = [unique[right], unique[pivot_index]];
        let store_index = left;
        for (let i = left; i < right; i++) {
            if (count[unique[i]] > pivot_freq) {
                [unique[store_index], unique[i]] = [unique[i], unique[store_index]];
                store_index++;
            }
        }
        [unique[store_index], unique[right]] = [unique[right], unique[store_index]];
        return store_index;
    }
    
    quickSelect(0, unique.length - 1, k - 1);
    return unique.slice(0, k);
}
</code></pre>
<button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

**Time Complexity:** O(n) on average

**Space Complexity:** O(n)

This method is efficient and effective, especially when dealing with large datasets, by leveraging the QuickSelect algorithm to find the top `k` elements without fully sorting the entire array.

## Conclusion

The "Top K Frequent Elements" problem is a common coding interview question that evaluates your ability to process and analyze data efficiently. By exploring various approaches like the heap method, bucket sort, and QuickSelect, you can identify the most frequent elements in an array with varying degrees of efficiency and complexity.

Understanding these solutions not only helps in solving this specific problem but also builds a foundation for tackling more complex challenges involving frequency analysis, sorting optimizations, and selection algorithms. Practice and analyze different approaches to become proficient in solving similar problems efficiently.

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
