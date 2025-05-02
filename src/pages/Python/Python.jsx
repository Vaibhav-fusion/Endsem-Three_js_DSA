import { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Python = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const topics = {
    whatIsPython: {
      title: "What is Python?",
      description: "Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used for web development, data analysis, AI, and more.",
      example: `# This is a simple Python script
print("Hello, World!")`,
    },
    print: {
      title: "Print Function",
      description: "The print() function outputs text to the console. You can print strings, numbers, variables, and more.",
      example: `# Printing different types of data
print("Hello")  # String
print(42)       # Number
print(3.14)     # Float`,
    },
    variables: {
      title: "Variables",
      description: "Variables store data values. In Python, you don't need to declare variable types - Python infers them automatically.",
      example: `# Variable assignment
name = "Alice"
age = 25
height = 5.9
is_student = True`,
    },
    input: {
      title: "User Input",
      description: "The input() function allows you to get user input. By default, it returns the input as a string.",
      example: `# Getting user input
name = input("What's your name? ")
print(f"Hello, {name}!")`,
    },
    ifElse: {
      title: "If-Else Statements",
      description: "Conditional statements let you execute different code blocks based on conditions.",
      example: `# If-else example
age = 18

if age >= 18:
    print("You're an adult")
else:
    print("You're a minor")`,
    },
    loops: {
      title: "Loops",
      description: "Loops let you execute a block of code repeatedly. Python has 'for' and 'while' loops.",
      example: `# For loop example
for i in range(5):
    print(i)

# While loop example
count = 0
while count < 5:
    print(count)
    count += 1`,
    },
    list: {
      title: "Lists",
      description: "Lists are ordered collections of items (which can be of different types). They are mutable (can be changed).",
      example: `# List examples
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Accessing elements
print(fruits[0])  # Output: apple`,
    },
    dictionary: {
      title: "Dictionaries",
      description: "Dictionaries store key-value pairs. They are unordered, changeable, and don't allow duplicates.",
      example: `# Dictionary example
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Accessing values
print(person["name"])  # Output: Alice`,
    },
    functions: {
      title: "Functions",
      description: "Functions are reusable blocks of code that perform a specific task. They help organize and modularize your code.",
      example: `# Function example
def greet(name):
    return f"Hello, {name}!"

# Calling the function
message = greet("Bob")
print(message)  # Output: Hello, Bob!`,
    }
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const sectionRefs = {
    whatIsPython: useRef(null),
    print: useRef(null),
    variables: useRef(null),
    input: useRef(null),
    ifElse: useRef(null),
    loops: useRef(null),
    list: useRef(null),
    dictionary: useRef(null),
    functions: useRef(null)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Python Basics Tutorial</h1>
      
      <div className="mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This tutorial covers the fundamental concepts of Python programming. 
          Each section includes explanations and simple code examples to help you get started.
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
                language="python" 
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

export default Python;