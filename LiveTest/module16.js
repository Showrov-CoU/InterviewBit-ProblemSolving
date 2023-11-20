/**
 ** Time Complexity O(nlogn)
 ** Space Complexity O(n)
 */

const topKFrequent = (nums, k) => {
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const uniqueNums = Array.from(frequencyMap.keys());

  uniqueNums.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

  const result = uniqueNums.slice(0, k);

  return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);
