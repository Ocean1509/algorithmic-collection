/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let m = preorder[0];
    let root = new TreeNode(m);
    let idx = 0;
    for(let i = 0;i <inorder.length;i++) {
        if(inorder[i] === m) { break }
        else idx++
    }
    root.left  = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx));
    root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))
    return root
};


// 前
var preorder = [3,9,20,15,7];
// 中
var inorder = [9,3,15,20,7];

console.log(buildTree(preorder, inorder))
////////////////////////////////

// [9] [20,15,7]
// [9] [15,20,7]