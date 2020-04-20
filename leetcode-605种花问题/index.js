/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let flag = 0;
  if(!n) return true
  for (let i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i] !== 1 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1) {
      flowerbed[i] = 1
      flag++;
      if(flag >= n) return true;
    }
  }
  return false
};
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1))
// console.log(canPlaceFlowers([0, 1, 0, 0, 0, 0, 1], 2))
// [1,0,0,0,0,0,1] // 2  7 / 2 - 1
// [0,1,0,0,0,0,1]