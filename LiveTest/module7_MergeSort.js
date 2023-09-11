/**
 ** Time Complexity O(nlog(n))
 ** Space Complexity O(n)
 */

const merge = (left, right) => {
  let sortedNums = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedNums.push(left.shift());
    } else {
      sortedNums.push(right.shift());
    }
  }

  return [...sortedNums, ...left, ...right];
};

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);

  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));

  return merge(left, right);
};

process.stdin.on("data", (data) => {
  let nums = data.toString().split(" ").map(Number);
  let sortedNums = mergeSort(nums);
  console.log(sortedNums);
});
