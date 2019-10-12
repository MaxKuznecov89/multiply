module.exports = function multiply(firstOperand, secondOperand) {
    let first = firstOperand.split('').reverse();
    let second = secondOperand.split('').reverse();

    let stack = [];

    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            let m = first[i] * second[j];
            if(stack[i + j]){stack[i + j] += m}else {stack[i + j] = m}
        }
    }

    for (let i = 0; i < stack.length; i++) {
        let num = stack[i] % 10;
        let move = Math.floor(stack[i] / 10);
        stack[i] = num;

        if (stack[i + 1])
            stack[i + 1] += move;
        else if (move != 0)
            stack[i + 1] = move;
    }


    return stack.reverse().join('');
}
