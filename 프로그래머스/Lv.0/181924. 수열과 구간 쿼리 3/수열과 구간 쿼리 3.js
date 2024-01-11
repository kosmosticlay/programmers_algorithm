function solution(arr, queries) {
    for (const value of queries) {
        // value = [0, 3]
        const temp = arr[value[0]];
        arr[value[0]] = arr[value[1]];
        arr[value[1]] = temp;
    }
    return arr;
    
}