function solution(arr, queries) {
    let result = [...arr]; 
    for (let [s, e] of queries) {
        for (let i = s; i <= e; i++) {
            result[i]++;
        }
    }
    return result;
}