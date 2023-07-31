const prompt = require("prompt-sync")();

let A = prompt()
  .split(",")
  .map((item) => parseInt(item.trim()));

A.sort((a, b) => b - a);

let ans1 = A[0] * A[1] * A[2];
let ans2 = A[0] * A[A.length - 1] * A[A.length - 2];

console.log(ans1 > ans2 ? ans1 : ans2);
