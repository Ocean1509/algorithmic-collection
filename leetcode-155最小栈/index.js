/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.hasSort = [];
  this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push(x);
  if(!this.hasSort.length) return this.hasSort.push(x);
  for (let i = 0; i < this.hasSort.length; i++) {
    if (this.hasSort[i] >= x) return this.hasSort.splice(i, 0, x)
  }
  this.hasSort.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let temp = this.arr.pop();
  this.hasSort.splice(this.hasSort.indexOf(temp), 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.hasSort[0]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack)
console.log(minStack.getMin())
minStack.pop();
console.log(minStack.top())
console.log(minStack.getMin());