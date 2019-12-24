/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  // let reg = new RegExp('(\\w{' + K + '})(?=\\w)', 'g')
  // S = S.split('-').join('').split("").reverse().join('').replace(reg, '$1-').split('').reverse().join('').toUpperCase()
  let reg = new RegExp('(\\w)(?=(?:\\w{' + K + '})+$)', 'g')
  return S.split('-').join('').replace(reg, '$1-').toUpperCase()
};


console.log(licenseKeyFormatting('5F3Z-2e-9-wd', 4))