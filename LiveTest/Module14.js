/**
 ** Time Complexity O(n)
 ** Space Complexity O(n)
 */
const mem = {};
const climbStairs = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (mem[n]) return mem[n];
  mem[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return mem[n];
};
console.log(climbStairs(3));
