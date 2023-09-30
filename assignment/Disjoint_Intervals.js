/**
 ** Time Complexity O(n)
 ** Space Complexity O(1)
 */

const solution = (Arr) => {
  Arr.sort((a, b) => a[1] - b[1]);
  let cmpValue = Arr[0],
    ans = 1;
  for (let i = 1; i < Arr.length; i++) {
    if (Arr[i][0] <= cmpValue[1]) {
      continue;
    } else {
      cmpValue = Arr[i];
      ans++;
    }
  }
  return ans;
};

process.stdin.on("data", (data) => {
  let Arr = [];
  data
    .toString()
    .trim()
    .split(",")
    .map((val) => {
      let values = val.split(" ").map(Number);
      Arr.push(values);
    });

  const result = solution(Arr);
  console.log(result);
});
