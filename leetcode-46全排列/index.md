给定一个 没有重复 数字的序列，返回其所有可能的全排列。

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

解题思路：
  dfs + 回溯


```
var premute = function(nums) {
  var result = [];
  var dbf = function(path, set) {
    if(path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    for(let i =0;i<nums.length;i++) {
      if(set.has(nums[i])) continue;
      set.add(nums[i]);
      path.push(nums[i]);
      dbf(path, set);
      set.remove(nums[i]);
      path.pop();
    }
  }
  dbf([], new Set())
  return result;
}
premute([1,2,3])
```