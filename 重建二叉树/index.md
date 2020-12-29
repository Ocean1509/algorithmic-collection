输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7


    3
    /\
   9  20
  /\
 10 11

 [3,9,10,11,20]
 [10,9,11,3,20]

 [10,9,11] [20]
 [9,10,11] [20]
解题思路：
https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/solution/qian-xu-zhong-xu-zhong-jian-er-cha-shu-fen-zhi-si-/