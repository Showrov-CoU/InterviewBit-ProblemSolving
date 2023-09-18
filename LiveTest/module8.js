/**
 ** Time Complexity O(logn)
 ** Space Complexity O(1)
 */

const search = (nums, target) => {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

process.stdin.on("data", (input) => {
  const arr = input.toString().split(" ").map(Number);
  const [target, ...nums] = arr;
  const result = search(nums, target);
  console.log(result);
});
