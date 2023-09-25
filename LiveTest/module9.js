/**
 ** Time Complexity O(log(n))
 ** Space Complexity O(1)
 */

const maxDepth = (root)=>{
  if (!root) return 0;
  let leftCnt = maxDepth(root.left);
  let rightCnt = maxDepth(root.right);

  return Math.max(leftCnt + 1, rightCnt + 1);
};
