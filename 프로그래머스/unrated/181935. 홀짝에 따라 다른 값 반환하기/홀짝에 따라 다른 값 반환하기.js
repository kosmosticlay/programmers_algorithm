function sum(n) {
    if (n <= 0) return 0
    return n += sum(n-2);
}

function squareSum(n) {
    if (n <= 0) return 0
    return Math.pow(n, 2) + squareSum(n-2);
}

function solution(n) {
    return n % 2 === 0 ? squareSum(n) : sum(n);
}