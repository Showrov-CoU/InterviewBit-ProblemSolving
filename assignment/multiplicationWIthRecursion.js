/**
 * Time Complexity O(b)
 * Space Complexity O(1)
 */

const multiplication = (a, b, count) => {
  count++;
  if (b === count) {
    return a;
  }
  return a + multiplication(a, b, count);
};

process.stdin.on("data", (data) => {
  let [a, b] = data.toString().trim().split(" ").map(Number);
  let count = 0;

  let result = multiplication(a, b, count);
  console.log(result);
});
