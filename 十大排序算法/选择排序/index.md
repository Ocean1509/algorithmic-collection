### 选择排序

思路：
首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。


例子：

```
3,5,1,3,2,62,4
1,5,3,3,2,62,4
1,2,3,3,5,62,4
1,2,3,3,4,62,5
1,2,3,3,4,5,62
```

时间复杂度O(n^2)
不管是最好结果还是最坏结果。时间复杂度都是一致的