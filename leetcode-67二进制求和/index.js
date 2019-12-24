var addBinary = function (a, b) {
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('');
  if (a.length < b.length) {
    let temp = a;
    a = b;
    b = temp;
  }
  let newA = new Array(a.length + 1).fill(0);
  for (let i = 0; i < a.length; i++) {
    newA[i + 1] = (a[i] & b[i]) ? a[i] & b[i] : ((a[i] ^ b[i]) & newA[i])
    newA[i] = newA[i] ^ (a[i] ^ b[i]);
  }
  return newA.reverse().join('').replace(/^\b(0*)/g, '')
};


var a = "11",
  b = "1";
console.log(addBinary(a, b))