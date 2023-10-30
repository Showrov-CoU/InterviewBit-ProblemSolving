/**
 * Time Complexity O(V+E)
 * Space Complexity O(V+E)
 */

function validPath(n, edges, source, destination) {
  if (n === 1) {
    return true;
  }

  const map = new Map();
  const set = new Set();
  const queue = [];

  for (const item of edges) {
    if (!map.has(item[0])) {
      map.set(item[0], []);
    }

    if (!map.has(item[1])) {
      map.set(item[1], []);
    }

    map.get(item[0]).push(item[1]);
    map.get(item[1]).push(item[0]);
  }

  queue.push(source);
  while (queue.length > 0) {
    const current = queue.shift();
    if (set.has(current)) {
      continue;
    }
    set.add(current);

    const neighbors = map.get(current);

    for (const item of neighbors) {
      if (item === destination) {
        return true;
      }
      queue.push(item);
    }
  }

  return false;
}

const n = 5;
const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];
const source = 0;
const destination = 4;

const result = validPath(n, edges, source, destination);
console.log(result);
