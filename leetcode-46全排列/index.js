/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    var dfs = function(path, set) {
        if(path.length === nums.length) {
            result.push(path.slice());
            return 
        }
        for(let i of nums) {
            if(set.has(i)) continue;
            path.push(i);
            set.add(i)
            dfs(path, set);
            // 回溯
            path.pop();
            set.delete(i)
        }
    }
    dfs([], new Set());
    return result
};


console.log(permute([1,2,3]))