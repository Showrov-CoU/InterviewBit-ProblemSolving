/*
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function maximumProfit(arr) {
  let leftMin = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    leftMin = Math.min(leftMin, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - leftMin);
  }
  return maxProfit;
}

rl.question("", (arr) => {
  arr = arr.split(" ").map((item) => parseInt(item));

  console.log(maximumProfit(arr));

  rl.close();
});
