const prompt = require("prompt-sync")();

let A = [],
  n = parseInt(prompt()),
  maxSum = 0;

for (let i = 0; i < n; i++) {
  let input = parseInt(prompt());
  A.push(input);
}
let B = parseInt(prompt());
let size = A.length;

for (let i = 0; i < B; i++) {
  maxSum += A[i];
}

let currentSum = maxSum;
for (let i = 0; i < B; i++) {
  let x = A[B - i - 1];
  let y = A[size - i - 1];
  currentSum = currentSum - x + y;
  //   console.log(currentSum);
  if (currentSum >= maxSum) {
    maxSum = currentSum;
  }
}

console.log(maxSum);
