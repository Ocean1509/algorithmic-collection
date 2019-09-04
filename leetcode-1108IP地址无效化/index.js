/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]')
};
console.log(defangIPaddr('255.100.50.0'))