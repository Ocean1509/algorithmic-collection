/* 对数组做去重
 * 
 * @example
 * [1,'1',1]                            -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}]             -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {a: 1, b: 2}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}]
 */

function uniqueArray(array) {
    let result = [];
    array.forEach((value) => {
        if (result.every(r => !deepEqual(r, value, result))) result.push(value)
    })
    return result
}

function deepEqual(origin, target) {
    if (typeof target !== 'object' || typeof origin !== 'object') return target === origin;
    if (origin.constructor !== target.constructor) return false;
    if (Object.prototype.toString.call(target) === "[object Object]") {
        let originKeys = Object.keys(origin);
        let targetKeys = Object.keys(target);
        if (originKeys.length !== targetKeys.length) return false;
        return targetKeys.some(t => deepEqual(origin[t], target[t]))
    }
    if(Object.prototype.toString.call(target) === "[object Array]") {
        if(target.length !== origin.length) return false;
        return target.some((t, i) => deepEqual(origin[i], t))
    }

}
// 数字
// 字符串
// 对象
// 数组


// console.log(uniqueArray([1, '1', 1]))
// console.log(uniqueArray([{
//     a: 1,
//     b: 2
// }, {
//     b: 1
// }, {
//     b: 2,
//     a: 1
// }]))
console.log(uniqueArray([[1, {a: 1}], [2], [3], [1, {a: 1}]]))
console.log(uniqueArray([[2], [3]]))