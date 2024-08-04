function solution(my_string, alp) {
    const pattern = new RegExp(alp, 'g');
    return my_string.replace(pattern, (str) => str.toUpperCase());
}