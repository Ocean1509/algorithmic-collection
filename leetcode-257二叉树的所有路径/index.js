/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    var result = [];
    var tree = [];
    var dfs = function(node, path) {
        if(!node.val) return
        path.push(node.val);
        if(!node.left && !node.right) {
            result.push(path.join('->'))
            return
        }
        if(node.left) {
            dfs(node.left, path)
            path.pop()
        }

        if(node.right) {
            dfs(node.right, path)
            path.pop()
        }
    }
    dfs(root, tree)
    return result
};

var root = {
    val: 1, 
    left: {
        val: 2,
        right: {
            val: 5
        }
    }, 
    right: {
        val: 3
    }
}

console.log(binaryTreePaths(root))