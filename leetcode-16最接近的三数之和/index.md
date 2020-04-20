给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).


解析： 解题方式类似于三数之和，利用双指针去减少时间复杂度

1. 排序
2. 循环遍历，选择每个基准 nums[i]
3. 左指针 left=i+1, 右指针 right = nums.length - 1;
4. nums[i] + nums[left] + nums[right] 和 target比较，如果比target大，则right-- 循环， 如果比target小则left++
5. 记录每次的求和最小的三个数

