function solution(numbers, n) {
    let sumNum = 0;
    let i = 0;
    while (sumNum <= n) {
        sumNum += numbers[i];
        i++;
    }
    return sumNum
}