function quickSort(arr) {
    let len = arr.length;
    let middle = Math.floor(len / 2);
    let middleNum = arr.splice(middle, 1);
    let left = [];
    let right = [];
    for(let i = 0; i<arr.length;i++) {
        if(arr[i] < middleNum) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([middleNum], quickSort(right));
}