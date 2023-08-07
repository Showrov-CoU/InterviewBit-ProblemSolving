/*
 * Time Complexity O(n^2)
 * Space Complexity O(n)
 */

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const solution = (inputArr, target) => {
  const ansArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    let findValue = target - inputArr[i];

    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[j] === findValue) {
        ansArr.push(i);
        ansArr.push(j);
      }
    }
  }
  console.log(ansArr);
};

rl.question("", (input) => {
  const inputArr = input.split(" ").map((item) => parseInt(item));
  rl.question("", (value) => {
    let target = Number(value);

    solution(inputArr, target);
    rl.close();
  });
});
