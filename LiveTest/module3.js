/*
 * Time Complexity O(n)
 * Space Complexity O(n)
 */

const solution = (string, indices) => {
  const n = string.length;
  const result = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    result[indices[i]] = string[i];
  }
  console.log(result.join(""));
};

const getIndices = (string) => {
  process.stdin.on("data", (data) => {
    const indices = data.toString().trim().split(",").map(Number);
    solution(string, indices);
  });
};

process.stdin.on("data", (data) => {
  getIndices(data.toString().trim().split(""));
});
