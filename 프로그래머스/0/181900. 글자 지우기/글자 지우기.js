function solution(my_string, indices) {
    return [...my_string].map((str, index) => indices.includes(index) ? null : str).join('');
}