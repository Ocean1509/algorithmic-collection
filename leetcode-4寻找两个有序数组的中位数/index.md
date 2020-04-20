给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5


解析：
解题思路
根据两个数组的特点：有序数组。
一、将两个数组利用归并排序算法的思想合并为一个数组
二、找出合并后的数组的中位数。如果合并后的数组长度为偶数，则为中间两个数的和的一半，如果为奇数，则为中间的数的一半
注意：返回结果为浮点数，采用JavaScript中的**toFixed()**方法选择保留的小数位数

作者：a-mo-xi-lin-5
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/gui-bing-pai-xu-javascript-by-a-mo-xi-lin-5/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。