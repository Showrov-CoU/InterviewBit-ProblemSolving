/**
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const mergeSortedArray = (nums1, m, nums2, n) => {
  while (n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
};

const getNum1 = () => {
  return new Promise((resolve) => {
    rl.question("", (data) => {
      let arr1 = data.toString().split(" ").map(Number);
      resolve(arr1);
    });
  });
};
const getNum2 = () => {
  return new Promise((resolve) => {
    rl.question("", (data) => {
      let arr2 = data.toString().split(" ").map(Number);
      resolve(arr2);
    });
  });
};

const getInput = async () => {
  let [m, ...nums1] = await getNum1();
  let [n, ...nums2] = await getNum2();

  mergeSortedArray(nums1, m, nums2, n);
};

getInput();
