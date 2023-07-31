const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a Number: "));

let sum = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sum(n));
