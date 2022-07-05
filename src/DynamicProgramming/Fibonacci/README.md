# Solution Explanation

The Fibonacci sequence is a sequence of numbers where the next number is the sum of the previous two numbers. The first two numbers are 0 and 1. The third number is 1, the fourth number is 2, the fifth number is 3, and so on.

It is defined as follows: Fn = Fn-1 + Fn-2.

Solving the Fibonacci sequence is a classic dynamic programming problem. Using recursion, we can solve the problem in O(n) time. The trick to achieving this is using memoization. We can store the results of the recursive calls in a hash table. This way, we can reuse the results of the recursive calls and avoid recomputing them. This is a very efficient way to solve the problem.

## Complexity Analysis

Time Complexity: O(n)
Space Complexity: O(n)

## References

[Fibonacci Number](https://en.wikipedia.org/wiki/Fibonacci_number)

[Memoization](https://en.wikipedia.org/wiki/Memoization)
