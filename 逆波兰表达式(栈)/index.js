function caclc_exp(exp) {
    const stack = [];
    for (let i = 0; i < exp.length; i++) {
        let symbol = ['/', '*', '+', '-'];
        if(symbol.indexOf(exp[i]) === -1) stack.push(exp[i]);
        else if(stack.length > 1) {
            let value1 = stack.pop();
            let value2 = stack.pop();
            stack.push(parseInt(eval(value2 + exp[i] + value1)).toString());
        }
    }
    return stack[0]
}

console.log(caclc_exp(["4","13","5","/","+"]))
console.log(caclc_exp(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))