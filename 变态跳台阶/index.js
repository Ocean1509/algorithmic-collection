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