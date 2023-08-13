const { resolve } = require("path");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const getString = () => {
  return new Promise((resolve) => {
    rl.question("", (input) => {
      resolve(input);
      rl.close();
    });
  });
};

const isValid = (string) => {
  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let char of string) {
    if (hashMap[char]) {
      stack.push(hashMap[char]);
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

getString().then((input) => {
  let string = input.split("");
  const result = isValid(string);
  console.log(result);
});
