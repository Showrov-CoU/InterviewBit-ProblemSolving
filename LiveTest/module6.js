const fun = (s) => {
  let stack = [];
  for (let ch of s) {
    stack.push(ch);
  }
  console.log(stack.join(""));
};
process.stdin.on("data", (data) => {
  let string = "";
  string += data;
  let result = fun(string);
  // console.log(result);
});
