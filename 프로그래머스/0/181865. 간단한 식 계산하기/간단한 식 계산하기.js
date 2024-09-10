function solution(binomial) {
    const equation = binomial.split(" ");
    const [a, op, b] = equation;
    
    switch (op) {
        case "+" :
            return parseInt(a) + parseInt(b);
            break;
        case "-" :
            return parseInt(a) - parseInt(b);
            break;
        case "*" :
            return parseInt(a) * parseInt(b);
            break;
    }
}