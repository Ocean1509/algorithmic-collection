/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if(!root) return 0 
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var o = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15, 
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
}
console.log(maxDepth(o))