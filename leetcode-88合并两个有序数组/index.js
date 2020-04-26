/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m)
  let j = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] >= nums2[j]) {
      nums1.splice(i, 0, nums2[j])
      j++
    }
  }

  for (let k = j; k < nums2.length; k++) {
    nums1.push(nums2[k])
  }
};

merge(nums1, 3, nums2, 3)


// [2, 4, 5, 7]
// [1, 3, 4, 6]