function getLocalName(nums) {
    let localNames = Array.prototype.map.call(document.querySelectorAll('*'), (t => t.localName));
    const map = new Map();
    for(let i = 0; i<localNames.length; i++)  {
        if(map.has(localNames[i])) {
            map.set(localNames[i], map.get(localNames[i]) + 1)
        } else {
            map.set(localNames[i], 1)
        }
    }
    let set = new Set()
    for(let v of map.values()) {
        set.add(v)
    }
    let idx = [...set].sort((a, b) => b -a).splice(0, nums).pop();
    let arr = []
    for(let [i, v] of map.entries()) {
        if(v >= idx) {
            arr.push(i)
        }
    }
    return arr
}

// {
//     span: 10,
//     div: 5,
//     input: 6,
//     p: 7

// }
