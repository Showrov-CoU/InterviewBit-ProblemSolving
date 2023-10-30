/**
 * Time Complexity O(N)
 * Space Complexity O(N)
 */

function countPaths(root, A, graph, C) {
  let goodPaths = 0;

  function dfs(node, goodNodes) {
    if (A[node - 1] === 1) {
      goodNodes++;
    }

    if (goodNodes > C) {
      return;
    }

    let isLeaf = true;

    for (const neighbor of graph[node]) {
      isLeaf = false;
      dfs(neighbor, goodNodes);
    }

    if (isLeaf) {
      goodPaths++;
    }
  }

  dfs(root, 0);
  return goodPaths;
}

function countGoodPaths(A, B, C) {
  const N = A.length;
  const graph = Array(N + 1)
    .fill()
    .map(() => []);

  for (const [u, v] of B) {
    graph[u].push(v);
  }

  return countPaths(1, A, graph, C);
}

// Sample input
const A = [0, 1, 0, 1, 1, 1];
const B = [
  [1, 2],
  [1, 5],
  [1, 6],
  [2, 3],
  [2, 4],
];
const C = 1;

const result = countGoodPaths(A, B, C);
console.log(result); // Output: 3
