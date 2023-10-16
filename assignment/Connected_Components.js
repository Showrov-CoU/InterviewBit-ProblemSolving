/**
 * Time Complexity O(V + E)
 * Space Complexity O(V)
 */

function countConnectedComponents(A, B) {
  const adjList = buildAdjacencyList(A, B);
  const visited = new Set();
  let connectedComponents = 0;

  for (let node = 1; node <= A; node++) {
    if (!visited.has(node)) {
      connectedComponents++;
      dfs(node, adjList, visited);
    }
  }

  return connectedComponents;
}

function dfs(node, adjList, visited) {
  if (visited.has(node)) {
    return;
  }

  visited.add(node);
  for (const neighbour of adjList[node]) {
    dfs(neighbour, adjList, visited);
  }
}

function buildAdjacencyList(A, B) {
  const adjList = {};
  for (let i = 1; i <= A; i++) {
    adjList[i] = [];
  }

  for (const edge of B) {
    const [node1, node2] = edge;
    adjList[node1].push(node2);
    adjList[node2].push(node1);
  }
  return adjList;
}

const ans = countConnectedComponents(4, [
  [1, 2],
  [2, 3],
]);

console.log(ans);
