const problems = [
  {
    id: 1,
    title: "Two Sum",
    desc: `Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    difficulty: "easy",
  },
  {
    id: 2,
    title: "3Sum",
    desc: `Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.`,
    difficulty: "medium",
  },
  {
    id: 3,
    title: "4Sum",
    desc: `Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.`,
    difficulty: "medium",
  },
  {
    id: 4,
    title: "Sudoku Solver",
    desc: `Write a program to solve a Sudoku puzzle by filling the empty cells.
    Empty cells are indicated by the character '.'.
    You may assume that there will be only one unique solution.`,
    difficulty: "hard",
  },
  {
    id: 5,
    title: "Sliding Window Maximum",
    desc: `Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.`,
    difficulty: "super",
  },
  {
    id: 6,
    title: "Target Sum",
    desc: `You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
    Find out how many ways to assign symbols to make sum of integers equal to target S.`,
    difficulty: "medium",
  },
  {
    id: 7,
    title: "Trapping Rain Water",
    desc: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    difficulty: "super",
  },
  {
    id: 8,
    title: "Merge Two Sorted List",
    desc: `Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.`,
    difficulty: "easy",
  },
  {
    id: 9,
    title: "Best Time to Buy and Sell Stock",
    desc: `Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit. Note that you cannot sell a stock before you buy one.`,
    difficulty: "easy",
  },
  {
    id: 10,
    title: "Partition Labels",
    desc: `A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.`,
    difficulty: "hard",
  },
  {
    id: 11,
    title: "Verifying an Alien Dictionary",
    desc: `In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters. Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.`,
    difficulty: "medium",
  },
  {
    id: 12,
    title: "Maximum Subarray",
    desc: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
    difficulty: "easy",
  },
  {
    id: 13,
    title: "Text Justification",
    desc: `Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
    You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
    Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
    For the last line of text, it should be left justified and no extra space is inserted between words.
    `,
    difficulty: "super",
  },
  {
    id: 14,
    title: "Integer to English Words",
    desc: `Convert a non-negative integer num to its English words representation.`,
    difficulty: "super",
  },
  {
    id: 15,
    title: "Merge k Sorted Lists",
    desc: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
    Merge all the linked-lists into one sorted linked-list and return it.`,
    difficulty: "super",
  },
  {
    id: 16,
    title: "Merge Intervals",
    desc: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    difficulty: "hard",
  },
  {
    id: 17,
    title: "Reverse Linked List",
    desc: `Reverse a singly linked list.`,
    difficulty: "easy",
  },
  {
    id: 18,
    title: "Meeting Romms II",
    desc: `Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.`,
    difficulty: "medium",
  },
  {
    id: 19,
    title: "Next Permutation",
    desc: `Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
    If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
    The replacement must be in place and use only constant extra memory.`,
    difficulty: "hard",
  },
  {
    id: 20,
    title: "Container With Most Water",
    desc: `Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.`,
    difficulty: "hard",
  },
  {
    id: 21,
    title: "Minimum Remove to Make Valid Parentheses",
    desc: `Given a string s of '(' , ')' and lowercase English characters. 
    Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
    Formally, a parentheses string is valid if and only if:
        - It is the empty string, contains only lowercase characters, or
        - It can be written as AB (A concatenated with B), where A and B are valid strings, or
        - It can be written as (A), where A is a valid string.`,
    difficulty: "medium",
  },
  {
    id: 22,
    title: "Minimum Window Substring",
    desc: `Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".
    Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.`,
    difficulty: "super",
  },
  {
    id: 23,
    title: "Reaching Points",
    desc: `A move consists of taking a point (x, y) and transforming it to either (x, x+y) or (x+y, y).
    Given a starting point (sx, sy) and a target point (tx, ty), return True if and only if a sequence of moves exists to transform the point (sx, sy) to (tx, ty). Otherwise, return False.`,
    difficulty: "super",
  },
  {
    id: 24,
    title: "Letter Combinations of a Phone Number",
    desc: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
    A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.`,
    difficulty: "medium",
  },
  {
    id: 25,
    title: "Top K Frequent Words",
    desc: `Given a non-empty list of words, return the k most frequent elements.
    Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.`,
    difficulty: "medium",
  },

  {
    id: 26,
    title: "Coin Change",
    desc: `You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
    You may assume that you have an infinite number of each kind of coin.`,
    difficulty: "medium",
  },
  {
    id: 27,
    title: "First Missing Positive",
    desc: `Given an unsorted integer array nums, find the smallest missing positive integer`,
    difficulty: "super",
  },
  {
    id: 28,
    title: "Permutation in String",
    desc: `Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.`,
    difficulty: "medium",
  },
  {
    id: 29,
    title: "Shuffle the Array",
    desc: `Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
    Return the array in the form [x1,y1,x2,y2,...,xn,yn].`,
    difficulty: "easy",
  },
  {
    id: 30,
    title: "Climbing Stairs",
    desc: `You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    difficulty: "easy",
  },
  {
    id: 31,
    title: "Min Stack",
    desc: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
        push(x) -- Push element x onto stack.
        pop() -- Removes the element on top of the stack.
        top() -- Get the top element.
        getMin() -- Retrieve the minimum element in the stack.`,
    difficulty: "medium",
  },
];

export default problems;
