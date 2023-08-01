const prompt = require("prompt-sync")();

let A = prompt()
  .split(",")
  .map((item) => parseInt(item.trim()));

let X = parseInt(prompt()),
  sum = 0;

for (let i = 0; i < A.length; i++) {
  sum += A[i];
}

let flag = false;

for (let i = 0; i < A.length; i++) {
  if (A[i] !== sum / A.length) {
    if (A[i] - X === sum / A.length || A[i] + X === sum / A.length) {
      flag = true;
      break;
    }
  }
}

console.log(flag ? 1 : 0);
