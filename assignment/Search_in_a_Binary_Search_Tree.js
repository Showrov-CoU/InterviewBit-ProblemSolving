/**
 ** Time Complexity O(log(n))
 ** Space Complexity O(1)
 */

const searchBST = (root, val) => {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (val > root.val) {
    return searchBST(root.right, val);
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  }
};
