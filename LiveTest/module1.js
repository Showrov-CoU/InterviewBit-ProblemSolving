// Time complexity O(n)
// Space complexity O(1)

const prompt = require("prompt-sync")();

let n = prompt("Enter Number: ");

function factorial(n) {
  if (n === 0) return 1;
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(n));
