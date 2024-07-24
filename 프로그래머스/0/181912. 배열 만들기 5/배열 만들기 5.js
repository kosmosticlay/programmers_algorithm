function solution(intStrs, k, s, l) {
    const numArray = intStrs.map((numStr) => +[...numStr].splice(s,l).join(''))
    return numArray.filter((num) => num > k);    
}