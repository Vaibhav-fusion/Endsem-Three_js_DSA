import { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const DSA = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const topics = {
    whyDSA: {
      title: "Why Learn DSA?",
      description: "Data Structures and Algorithms are fundamental to efficient programming. They help you write optimized code, solve complex problems, and perform well in technical interviews.",
      example: `// Example: Simple vs Optimized Approach
// Naive approach O(n²)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Do something
  }
}

// Optimized approach O(n)
for (let i = 0; i < n; i++) {
  // Do something
}`,
    },
    dsVsAlgo: {
      title: "Data Structures vs Algorithms",
      description: "Data Structures are ways to organize and store data. Algorithms are step-by-step procedures to solve problems using data structures.",
      example: `// Data Structure Example (Array)
const numbers = [1, 2, 3, 4, 5];

// Algorithm Example (Searching)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
    },
    timeComplexity: {
      title: "Time & Space Complexity",
      description: "Big O notation describes how an algorithm's performance scales with input size. It helps compare different approaches.",
      example: `// O(1) - Constant time
function getFirst(arr) {
  return arr[0];
}

// O(n) - Linear time
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// O(n²) - Quadratic time
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}`,
    },
    prefixSum: {
      title: "Prefix Sum",
      description: "A technique to precompute cumulative sums for efficient range sum queries.",
      example: `// Prefix Sum Array
function prefixSum(arr) {
  let prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i-1] + arr[i];
  }
  return prefix;
}

// Query range sum in O(1)
function rangeSum(prefix, l, r) {
  return prefix[r] - (prefix[l-1] || 0);
}`,
    },
    twoPointer: {
      title: "Two Pointer Technique",
      description: "Efficient approach for problems involving sorted arrays or linked lists.",
      example: `// Find pair with target sum
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}`,
    },
    binarySearch: {
      title: "Binary Search",
      description: "Efficient O(log n) search algorithm for sorted arrays.",
      example: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    },
    recursion: {
      title: "Recursion",
      description: "A function that calls itself to solve smaller instances of the same problem.",
      example: `// Factorial using recursion
function factorial(n) {
  if (n <= 1) return 1;  // Base case
  return n * factorial(n - 1);  // Recursive case
}

// Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}`,
    },
    sorting: {
      title: "Sorting Algorithms",
      description: "Different approaches to arrange data in order.",
      example: `// Bubble Sort O(n²)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

// Merge Sort O(n log n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
    },
    sieve: {
      title: "Sieve of Eratosthenes",
      description: "Efficient algorithm to find all primes up to a given number.",
      example: `function sieveOfEratosthenes(n) {
  const primes = new Array(n+1).fill(true);
  primes[0] = primes[1] = false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i*i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  
  return primes.map((isPrime, num) => isPrime ? num : null)
               .filter(val => val !== null);
}`,
    },
    oop: {
      title: "Classes & Objects",
      description: "Object-Oriented Programming concepts in JavaScript.",
      example: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
}

const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice`,
    },
    linkedList: {
      title: "Linked List",
      description: "Linear data structure where elements are linked using pointers.",
      example: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  add(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    this.size++;
  }
}`,
    },
    stackQueue: {
      title: "Stack & Queue",
      description: "Linear data structures with specific insertion/removal rules.",
      example: `// Stack (LIFO)
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length-1]; }
}

// Queue (FIFO)
class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
}`,
    },
    binaryTree: {
      title: "Binary Tree Traversals",
      description: "Different ways to visit all nodes in a binary tree.",
      example: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Pre-order (Root, Left, Right)
function preOrder(node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

// In-order (Left, Root, Right)
function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

// Post-order (Left, Right, Root)
function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}`,
    }
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const sectionRefs = {
    whyDSA: useRef(null),
    dsVsAlgo: useRef(null),
    timeComplexity: useRef(null),
    prefixSum: useRef(null),
    twoPointer: useRef(null),
    binarySearch: useRef(null),
    recursion: useRef(null),
    sorting: useRef(null),
    sieve: useRef(null),
    oop: useRef(null),
    linkedList: useRef(null),
    stackQueue: useRef(null),
    binaryTree: useRef(null)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Data Structures & Algorithms Tutorial</h1>
      
      <div className="mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This tutorial covers fundamental Data Structures and Algorithms concepts with JavaScript implementations.
        </p>
      </div>

      <div className="space-y-16">
        {Object.entries(topics).map(([key, topic], index) => (
          <motion.section 
            key={key}
            id={key}
            ref={sectionRefs[key]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="scroll-mt-20"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">{topic.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{topic.description}</p>
            
            <div className="relative">
              <div className="absolute right-2 top-2 z-10">
                <button
                  onClick={() => copyToClipboard(topic.example, index)}
                  className="p-2 rounded-md bg-indigo-700 hover:bg-indigo-800 text-white transition-colors"
                  aria-label="Copy code"
                >
                  {copiedIndex === index ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    <ClipboardDocumentIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <SyntaxHighlighter 
                language="javascript" 
                style={atomDark}
                showLineNumbers
                customStyle={{ borderRadius: '0.5rem', fontSize: '0.9rem' }}
              >
                {topic.example}
              </SyntaxHighlighter>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default DSA;