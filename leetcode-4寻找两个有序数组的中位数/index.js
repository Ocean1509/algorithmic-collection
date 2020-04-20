/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let r1 = 0;
  let r2 = 0;
  const result = []
  while (r1 < nums1.length && r2 < nums2.length) {
    if (nums1[r1] < nums2[r2]) {
      result.push(nums1[r1++])
    } else {
      result.push(nums2[r2++])
    }
  }
  while (r1 < nums1.length) {
    result.push(nums1[r1++])
  }
  while (r2 < nums2.length) {
    result.push(nums2[r2++])
  }
  if (result.length % 2) return result[Math.floor(result.length / 2)]
  else return (result[(result.length / 2) - 1] + result[result.length / 2]) / 2
};



var nums1 = [1, 3]
var nums2 = [2, 4]

console.log(findMedianSortedArrays(nums1, nums2))