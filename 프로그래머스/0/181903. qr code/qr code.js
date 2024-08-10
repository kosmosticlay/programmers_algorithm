function solution(q, r, code) {
    return [...code].filter((str, i, array) => i % q === r).join('')
}