/**
 * Time Complexity O(stringLength / 2)
 * Space Complexity O(1)
 */
const isPalindrom = (string, low, high) => {
  if (string[low] !== string[high]) return false;
  if (low >= high) return true;
  return isPalindrom(string, low + 1, high - 1);
};

let input;
process.stdin.on("data", (chunk) => {
  input = chunk.toString().trim().split("");
  let result = isPalindrom(input, 0, input.length - 1);
  console.log(result);
});
