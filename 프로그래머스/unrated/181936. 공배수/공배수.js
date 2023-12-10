function solution(number, n, m) {
    if (!(number % n || number % m)) {
        return 1
    } else {
        return 0
    }
}