const findMin = (nums) => {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (
      left === right ||
      (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1])
    ) {
      return nums[mid];
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
};

process.stdin.on("data", (input) => {
  const nums = input.toString().split(" ").map(Number);
  const result = findMin(nums);
  console.log(result);
});
