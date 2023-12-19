function solution(my_string, overwrite_string, s) {
    let len = overwrite_string.length;
    let before = my_string.substring(0, s);
    let after = my_string.substring(s + len);
    return before + overwrite_string + after;
}
