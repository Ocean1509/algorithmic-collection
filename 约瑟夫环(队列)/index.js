function joseph(arr) {
    const queue = [];
    for (let i = 0; i < arr.length; i++) {
        if((i % 3) === 2) queue.push(arr[i])
    }
    if(queue.length === 1) return queue[0];
    else return joseph(queue)
}
console.log(joseph([0,1,2,3,4,5,6,7,8,9,10]))