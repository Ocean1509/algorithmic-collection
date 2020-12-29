一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

题解：

    斐波那契数列的变种，数学题

设第n级台阶有n种跳法
f(n) = f(n - 1) + f(n - 2) + ... f(1);
f(n-1) = f(n -2) + ... + f(1)

两式相减
f(n) = 2f(n-1)

```
function jumpFloorII(number)
{
    var arr = [];
    arr[1] = 1;
    for(let i = 2; i<=number;i++) {
        arr[i] = 2 * arr[i-1]
    }
    return arr[number]
    // write code here
}
```