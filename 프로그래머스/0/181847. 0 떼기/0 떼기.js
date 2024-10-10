function solution(n_str) {
    const regExp = /^0+/;
    return n_str.replace(regExp, "");
}