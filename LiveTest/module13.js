/**
 * Time Complexity O(V+E)
 * Space Complexity O(V)
 */

function hasCycle(A, B) {
  const adjList = new Array(A).fill(0).map(() => []);

  for (let i = 0; i < B.length; i++) {
    const [from, to] = B[i];
    adjList[from - 1].push(to - 1);
  }

  function isCyclicUtil(node, visited, recStack) {
    if (!visited[node]) {
      visited[node] = true;
      recStack[node] = true;

      for (const neighbor of adjList[node]) {
        if (!visited[neighbor] && isCyclicUtil(neighbor, visited, recStack)) {
          return true;
        } else if (recStack[neighbor]) {
          return true;
        }
      }
    }
    recStack[node] = false;
    return false;
  }

  function isCyclic() {
    const visited = new Array(A).fill(false);
    const recStack = new Array(A).fill(false);

    for (let i = 0; i < A; i++) {
      if (isCyclicUtil(i, visited, recStack)) {
        return 1;
      }
    }
    return 0;
  }

  return isCyclic();
}

// Sample input and usage
const A = 5;
const B = [
  [1, 2],
  [4, 1],
  [2, 4],
  [3, 4],
  [5, 2],
  [1, 3],
];

const hasCycles = hasCycle(A, B);
console.log(hasCycles); // Output: 1 (cycle: 1->2->4->1)
