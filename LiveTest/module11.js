/**
 ** Time Complexity O(n!)
 ** Space Complexity O(n)
 */
function generatePermutations(str) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextChar = remaining[i];
      const newCurrent = current + nextChar;
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      backtrack(newCurrent, newRemaining);
    }
  }

  backtrack("", str);
  return result;
}

const inputString = "abc";
const permutations = generatePermutations(inputString);
console.log(permutations);
