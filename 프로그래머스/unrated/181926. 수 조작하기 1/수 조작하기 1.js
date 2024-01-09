function solution(n, control) {
    let result = n;
    for(let i = 0; i < control.length; i++) {
        let strControl = control[i];
        if (strControl === "w") {
            result += 1;
        } else if (strControl === "s") {
            result -= 1;
        } else if (strControl === "d") {
            result += 10;
        } else if (strControl === "a") {
            result -= 10;
        }
    } 
    return result;
}