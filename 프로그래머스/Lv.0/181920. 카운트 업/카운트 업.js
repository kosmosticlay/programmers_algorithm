function solution(start_num, end_num) {
    const result = [];
    for(let i = 0; i < (end_num - start_num +1) ; i++) {
        result.push(start_num + i);
    }
    return result
}