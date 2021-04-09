// // 冒泡算
// function bubbleSort(arr) {
//     var flag = arr.length;
//     for(let i = flag;i>0;i--) {
//         for(let j = 0;j<i;j++) {
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 flag = j
//             }
//         }
//         console.log(arr)
//     }
//     return arr
// }


// console.log(bubbleSort(a))

// // 选择排序
// function chooseSort(arr) {
//     for(let i = 0;i<arr.length;i++) {
//         let min = arr[i];
//         for(let j = i; j<arr.length;j++) {
//             if(arr[j] < min) {
//                 let tem = arr[j];
//                 arr[j] = arr[];
//                 arr[]
//             }            
//         }
//     }
//     return arr;    
// }
// var a = [4,2,6,22,61,1,25,5]



// new

// function myNew(fn) {
//     let obj = Object.create(null);
//     let args = Array.prototype.slice.call(arguments, 1)
//     // obj.__proto__ = fn.prototype;
//     Object.setPrototypeOf(obj, fn.prototype);
//     let result = fn.apply(obj, args);
//     return typeof result === 'object' && result !== null ? result : obj;
// }

// instanceof

// function myInstance(obj, right) {
//     while(obj !== null) {
//         if(obj.__proto__ === right.prototype) return true;
//         obj = obj.__proto__;
//     }
//     return false
// }

// console.log(myInstance([], Object))

// console.log(myInstance([], RegExp))


// var a = Object.create(o, properties)

// function myCreate(obj, property) {
//     var o = {};
//     Object.setPrototypeOf(o, obj.prototype);
//     Object.defineProperties(o, property);
//     return o
// }


// Object.assign()

// var a = Object.assign(b)

// function myAssign(origin) {
//     var obj = Object.create(null)
//     for(let o in origin) {
//         if(origin.hasOwnProperty(o)) {
//             obj[o] = origin[o]
//         }
//     }
//     return obj
// }


// Array.prototype.myMap = function (callback) {
//     let arr = this;
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback.call(arr[i], arr[i], i, arr))
//     }
//     return result
// }


// Array.prototype.myFilter = function(callback) {
//     let arr = this;
//     let result = [];
//     for(let i = 0;i<arr.length;i++) {
//         let aR = callback.call(arr[i], arr[i], arr)
//         if(aR) {
//             result.push(aR)
//         }
//     }
//     return result
// }

// [1,2,3].myFilter((value, i, arr) => {
//     return true
// })
// console.log(Array.prototype)
// [1, 2, 3].myMap((value, key) => {
//     return value + 1
// })


// Array.prototype.myreduce = function(callback, init) {
//     let arr = this;
//     let len = arr.length;
//     let i = 0;
//     let pre = init || 0
//     while(i < len) {
//         pre = callback.call(arr[i], pre, arr[i], arr);
//         i++
//     }
//     return pre;
// }

// console.log([1,2,3].myreduce((pre, next, arr) => {
//     return pre + next;
// }, 0))

// Array.prototype.myFlat = function(dep = 1) {
//     let arr = this;
//     return arr.reduce((pre, next, arr) => {
//         let n = dep > 1 ? Array.isArray(next) ? next.myFlat(--dep) : next : next;
//         return pre.concat(n)
//     }, [])
// }
// console.log([1,3,4,[5,6, [7,8, [9,10]]]].myFlat(3))


// Array.prototype.call = function(obj) {
//     let obj = obj || window;
//     let args = Array.prototype.slice.call(arguments, 1);
//     let fn = Symbol();
//     obj[fn] = this;
// }

// var o = {
//     d: 123
// }
// function test(d){
//     console.log(this.d)
// }
// test.call(o)

// Array.prototype.myBind = function(context) {
//     let context = context || window;
//     let fn = this;
//     let args = Array.property.slice.call(arguments, 1)
//     return function() {
//         let argument = Array.prototype.slice.call(arguments, 1);
//         fn.apply(context, args.concat(argument))
//     }
// }

// 防抖
// function debounce(callback, time) {
//     let timer = null;
//     return function() {
//         if(timer) {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 callback.call(this)
//             }, time)
//         }
//     }
// }

// // 节流
// function throttle(callback, time) {
//     let flag = false;
//     return function() {
//         if(!flag) {
//             flag = true;
//             timer = setTimeout(() => {
//                 callback.call(this)
//                 flag = false;   
//             }, time)
//         }
        
//     }
// }



function deepClone(origin, map = new Map()) {
    if(!isObject(origin) && !isArray(origin)) { return origin };
    let type = ['RegExp', 'Date'];
    if(type.includes(origin.constructor)) return new origin.constructor(origin);
    let result = isObject(origin) ? {} : [];
    if(map.get(origin)) {
        return map.get(origin)
    }
    map.set(origin, result)
    for(let i in origin) {
        if(origin.hasOwnProperty(i)) {
            result[i] = deepClone(origin[i]);
        }
    }
}

