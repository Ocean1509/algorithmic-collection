var findMaxConsecutiveOnes = function (nums) {
  console.log(nums.join('').split(0))
  return nums.join('').split(0).reduce((a, b) => {
    return b.length > a ? b.length : a
  }, 0)
};


console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))