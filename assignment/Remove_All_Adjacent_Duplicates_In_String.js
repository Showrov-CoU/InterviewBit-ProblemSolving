/**
 *
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
const removeDuplicates = (s) => {
  let stack = [];
  for (let char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

process.stdin.on("data", (data) => {
  let string = "";
  string += data;
  let result = removeDuplicates(string);
  console.log(result);
});
