function solution(strArr) {
    return strArr.map((str, index) => index % 2 === 1 ? str.toUpperCase() : str.toLowerCase() );
}