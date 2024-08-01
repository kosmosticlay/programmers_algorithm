function solution(my_string, is_suffix) {
    let strArray = [];
    [...my_string].map((_, index) => strArray.push(my_string.slice(index)));
    return strArray.includes(is_suffix) ? 1 : 0;
}