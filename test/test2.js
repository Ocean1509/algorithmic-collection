// // var test = [{
// //     id: 1,
// //     name: 'i1'
// // }, {
// //     id: 2,
// //     name: 'i2',
// //     parentId: 1
// // }, {
// //     id: 4,
// //     name: 'i4',
// //     parentId: 3
// // }, {
// //     id: 3,
// //     name: 'i3',
// //     parentId: 2,
// // }, {
// //     id: 8,
// //     name: 'i8',
// //     parentId: 7
// // }]


// // var arrTree = function (arr) {
// //     var map = new Map();
// //     for (let i = 0; i < arr.length; i++) {
// //         map.set(arr[i].id, arr[i])
// //     }
// //     var head = null;
// //     for(let i = 0; i < arr.length;i++) {
// //         // console.log(arr[i])
// //         if(arr[i].parentId) {
// //             let r = map.get(arr[i].parentId);
// //             // console.log(r)
// //             r.next = arr[i];
// //             map.set(arr[i].id, r);
// //         }
// //     }
// //     console.log(map)
// // }

// // arrTree(test)
// // // i1
// // //     /
// // //     i2 /
// // //     i3 /
// // //     i4


// // Promise.resolve().then(() => {
// //     console.log(0);
// //     return Promise.resolve(4);
// // }).then((res) => {
// //     console.log(res)
// // })

// // Promise.resolve().then(() => {
// //     console.log(1);
// // }).then(() => {
// //     console.log(2);
// // }).then(() => {
// //     console.log(3);
// // }).then(() => {
// //     console.log(5);
// // }).then(() => {
// //     console.log(6);
// // })
// function add(a, b,c, d) {
//     return a + b + c + d;
// }
// // 柯里化
// function curry(fn, args) {
//     let len = fn.length;
//     args = args || [];
//     return function(...arg) {
//         newArgs = args.concat(arg);
//         if(newArgs.length < len) {
//             return curry.call(this, fn, newArgs)
//         } else {
//             return fn.apply(this, newArgs)
//         }
//     }
// }

// const addCurry = curry(add);
// console.log(addCurry(1)(2)(3)(4))


// var yideng = Array.prototype.push.uncurring();
// var yideng = function(arr, nums) {

//     arr = Array.prototype.slice.call(arr).concat(nums);

// }

Function.prototype.uncurring = function () {
    var _self = this;
    return function () {
      var obj = Array.prototype.shift.call(arguments);
      return _self.apply(obj, arguments);
    };
  };

  var yideng = Function.prototype.uncurring;
(function () {
    // var yideng = function(arr, nums) {

    //     arr = Array.prototype.slice.call(arr).concat(nums);
    //     console.log(arr)
    // }

    
  yideng(arguments, 4);
  console.log(arguments); // [1,2,3,4]
})(1, 2, 3);




Function.prototype.uncurring = function() {
    var _self = this;
    return function() {
        let args = Array.prototype.shift.call(arguments)
        return _self.apply(args, arguments)
    }
}

var d = Function.prototype.uncurring();
var a = {}
d(a, 'd', '12')
console.log(a)