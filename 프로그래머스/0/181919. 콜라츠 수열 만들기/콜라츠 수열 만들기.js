function solution(n) {
    let result = [];
    result.push(n)
    while (n > 1) {
        let temp = 0;
        if (n % 2 === 0) {
            temp = n / 2
        } else {
            temp = (3 * n) + 1;
        }
        console.log(temp)
        result.push(temp);
        n = temp
    }
    return result;
}