function solution(str_list, ex) {
    const result = str_list.reduce((acc,cur) => {
        return cur.includes(ex) ? acc : acc + cur;  
    }, "")
    return result;
}