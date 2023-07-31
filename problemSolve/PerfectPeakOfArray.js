const prompt = require("prompt-sync")();

let leftMax = [],
  rightMin = [];

let A = prompt()
  .split(",")
  .map((item) => parseInt(item.trim()));

leftMax.push(A[0]);
for (let i = 1; i <= A.length; i++) {
  leftMax.push(A[i] > leftMax[i - 1] ? A[i] : leftMax[i - 1]);
}

rightMin.push(A[A.length - 1]);
for (let i = A.length - 2; i >= 0; i--) {
  rightMin.unshift(A[i] < rightMin[0] ? A[i] : rightMin[0]);
}

let flag = false;
for (let i = 1; i < A.length - 1; i++) {
  if (A[i] > leftMax[i - 1] && A[i] < rightMin[i + 1]) {
    flag = true;
    break;
  } else flag = false;
}

if (flag) console.log(1);
else console.log(0);
