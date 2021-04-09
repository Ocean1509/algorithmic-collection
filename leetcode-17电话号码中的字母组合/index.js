/**
 * @param {string} digits
 * @return {string[]}
 */
var digitsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
};
var letterCombinations = function(digits) {
    let digitsArr = digits.split('');
    let result = [];
    if(!digits) return []
    var dfs = function(arr, path) {
        if(path.length === digitsArr.length) {
            result.push(path.slice().join(''));
            return
        }
        let member = arr.shift();
        let collections = digitsMap[member];
        // console.log(collections)
        if(!collections) return;
        for(let i of collections) {
            path.push(i);
            dfs([].concat(arr), path);
            path.pop()
        }
    }

    dfs([].concat(digitsArr), [])
    return result
};

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))

