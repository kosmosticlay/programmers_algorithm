function solution(start_num, end_num) {
    let result = [];
    for(let i = start_num; i >= end_num; i--){
        result.push(i)
    }
    return result;
    
    /* return Array.from({length: start_num - end_num + 1}, (_, i) => start_num - i); */
}