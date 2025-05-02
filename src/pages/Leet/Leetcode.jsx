import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, TrophyIcon } from '@heroicons/react/24/outline';

const LeetCodePractice = () => {
  const [ques, setQues] = useState({});
  const [showReward, setShowReward] = useState(false);

  const leetCodeQuestions = {
    prefixSum: [
      ["Subarray Sum Equals K", "https://leetcode.com/problems/subarray-sum-equals-k/", "Medium"],
      ["Product of Array Except Self", "https://leetcode.com/problems/product-of-array-except-self/", "Medium"]
    ],
    twoPointer: [
      ["Two Sum II - Input Array Is Sorted", "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", "Medium"],
      ["Trapping Rain Water", "https://leetcode.com/problems/trapping-rain-water/", "Hard"],
      ["3Sum Smaller", "https://leetcode.com/problems/3sum-smaller/", "Medium"],
      ["Is Subsequence", "https://leetcode.com/problems/is-subsequence/", "Easy"],
      ["Subarray Product Less Than K", "https://leetcode.com/problems/subarray-product-less-than-k/", "Medium"]
    ],
    timeAndSpaceComplexity: [
      ["Two Sum", "https://leetcode.com/problems/two-sum/", "Easy"],
      ["Best Time to Buy and Sell Stock", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "Easy"],
      ["Maximum Subarray", "https://leetcode.com/problems/maximum-subarray/", "Easy"]
    ],
    binarySearch: [
      ["Binary Search", "https://leetcode.com/problems/binary-search/", "Easy"],
      ["Search Insert Position", "https://leetcode.com/problems/search-insert-position/", "Easy"],
      ["Find First and Last Position of Element in Sorted Array", "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", "Medium"]
    ],
    recursion: [
      ["Merge Two Sorted Lists", "https://leetcode.com/problems/merge-two-sorted-lists/", "Easy"],
      ["Maximum Depth of Binary Tree", "https://leetcode.com/problems/maximum-depth-of-binary-tree/", "Easy"],
      ["Invert Binary Tree", "https://leetcode.com/problems/invert-binary-tree/", "Easy"]
    ],
    sorting: {
      mergeSort: [
        ["Sort an Array", "https://leetcode.com/problems/sort-an-array/", "Medium"]
      ]
    },
    sieveOfEratosthenes: [
      ["Count Primes", "https://leetcode.com/problems/count-primes/", "Medium"]
    ],
    classesAndObjects: [
      ["Intersection of Two Linked Lists", "https://leetcode.com/problems/intersection-of-two-linked-lists/", "Easy"],
      ["Reverse Linked List", "https://leetcode.com/problems/reverse-linked-list/", "Easy"]
    ],
    dataStructures: {
      linkedList: [
        ["Reverse Linked List", "https://leetcode.com/problems/reverse-linked-list/", "Easy"]
      ],
      stack: [
        ["Implement Queue using Stacks", "https://leetcode.com/problems/implement-queue-using-stacks/", "Easy"]
      ],
      queue: [
        ["Implement Queue using Stacks", "https://leetcode.com/problems/implement-queue-using-stacks/", "Easy"]
      ],
      binaryTreeDFS: [
        ["Maximum Depth of Binary Tree", "https://leetcode.com/problems/maximum-depth-of-binary-tree/", "Easy"]
      ]
    }
  };

  const toggleQuestion = (topic, index) => {
    const key = `${topic}-${index}`;
    setQues(prev => {
      const newState = { ...prev, [key]: !prev[key] };
      
      // Check if all questions are completed
      const totalQuestions = Object.values(leetCodeQuestions).flatMap(topic => 
        Array.isArray(topic) ? topic : Object.values(topic).flat()
      ).length;
      
      const completedCount = Object.values(newState).filter(Boolean).length;
      
      if (completedCount === totalQuestions) {
        setShowReward(true);
        setTimeout(() => setShowReward(false), 3000);
      }
      
      return newState;
    });
  };

  const getCompletedCount = (questions) => {
    if (Array.isArray(questions)) {
      return questions.filter((_, i) => ques[`${questions}-${i}`]).length;
    } else {
      return Object.values(questions).flatMap(q => 
        q.filter((_, i) => ques[`${q}-${i}`])
      ).length;
    }
  };

  const getTotalCount = (questions) => {
    if (Array.isArray(questions)) {
      return questions.length;
    } else {
      return Object.values(questions).flat().length;
    }
  };

  const renderQuestions = (questions, topic) => {
    if (Array.isArray(questions)) {
      return (
        <div className="space-y-2">
          {questions.map(([title, url, difficulty], index) => (
            <motion.div 
              key={`${topic}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <input
                type="checkbox"
                checked={!!ques[`${topic}-${index}`]}
                onChange={() => toggleQuestion(topic, index)}
                className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <div className="ml-3 flex-1">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  {title}
                </a>
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {difficulty}
                </span>
              </div>
              {ques[`${topic}-${index}`] && (
                <CheckIcon className="h-5 w-5 text-green-500" />
              )}
            </motion.div>
          ))}
        </div>
      );
    } else {
      return Object.entries(questions).map(([subTopic, subQuestions]) => (
        <div key={subTopic} className="mt-4">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 capitalize">
            {subTopic.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          {renderQuestions(subQuestions, `${topic}-${subTopic}`)}
        </div>
      ));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 relative">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">LeetCode Practice Tracker</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(leetCodeQuestions).map(([topic, questions]) => (
          <motion.div
            key={topic}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-5 bg-indigo-50 dark:bg-indigo-900/30">
              <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 capitalize">
                {topic.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div 
                  className="h-full bg-indigo-600 rounded-full" 
                  style={{
                    width: `${(getCompletedCount(questions) / getTotalCount(questions)) * 100}%`
                  }}
                />
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {getCompletedCount(questions)} of {getTotalCount(questions)} completed
              </p>
            </div>
            <div className="p-5">
              {renderQuestions(questions, topic)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reward Modal */}
      {showReward && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md text-center">
            <div className="flex justify-center">
              <TrophyIcon className="h-16 w-16 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">Congratulations!</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              You've completed all LeetCode questions in this collection!
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Keep up the great work on your DSA journey!
            </p>
            <button
              onClick={() => setShowReward(false)}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Continue Practicing
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LeetCodePractice;