/*
 * Problem statement: Given a number n, return the nth Fibonacci number.
 * Fibonacci numbers are defined as: F(0) = 0 and F(1) = 1.
 * F(n) = F(n-1) + F(n-2) with F(n) being the nth Fibonacci number.
 * For example, F(1) = 1, F(2) = 1 + 1 = 2, F(3) = 2 + 1 = 3 and F(4) = 3 + 2 = 5.
 */

type Memo = {
  [key: number]: number;
};

export default function fibonacci(n: number, memo: Memo = {}): number {
  if (n in memo) return memo[n];
  if (n < 2) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
