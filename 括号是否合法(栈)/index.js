function judgeLegal(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '(') stack.push(str[i]);
        if(str[i] === ')') {
            if(stack.length > 0) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length < 1
}

console.log(judgeLegal('sdf(ds(ew(we)rw)rwqq)qwewe'))
console.log(judgeLegal('(sd(qwqw)sd(sd))'))
console.log(judgeLegal('()()sd()(sd()fw))('))
