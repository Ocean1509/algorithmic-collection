function joseph(arr) {
  const queue = [];
  for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i])
  }
  let j = 0
  while(queue.length > 1) {
    let firstE = queue.shift();
    if(j % 3 !== 2) queue.push(firstE);
    j++
  }
  return queue[0]
}

var a = []
for(var i =0 ;i<100;i++) {
  a.push(i)
}
console.log(joseph(a))
