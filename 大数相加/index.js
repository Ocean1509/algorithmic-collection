function largeNumber(num1, num2) {
  let num1arry = num1.split("").reverse();
  let num2arry = num2.split('').reverse();
  let newArray = new Array(Math.max(num1.length, num2.length) + 1).fill(0);
  if(num1arry.length < num2arry.length) {
    let tmp = num1arry;
    num1arry = num2arry;
    num2arry = tmp;
  }
  for(let i = 0; i < num1arry.length; i++) {
    let temp = Number(num1arry[i]) + Number(num2arry[i] || 0);
    let splitS = temp.toString().split('');
    newArray[i] = Number(splitS.pop()) + Number(newArray[i]);
    if (splitS.length) {
      newArray[i + 1] = 1;
    }
  }
  return newArray.reverse()
}

var num1 = '426709752318213213';
var num2 = '9548125312913212321';
var num3 = '213'
var num4 = '414'
console.log(largeNumber(num1, num2))
// 9548125312913212321
//  426709752318213213
// 9974835065231425534  
