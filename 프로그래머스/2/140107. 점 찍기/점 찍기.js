function solution(k, d) {
    let count = 0;
    for (let a = 0; a * k <= d; a++) {
        let maxB = Math.floor(Math.sqrt((d ** 2 - (a * k) ** 2)) / k);
        count += (maxB + 1);
    }
    return count;
}
