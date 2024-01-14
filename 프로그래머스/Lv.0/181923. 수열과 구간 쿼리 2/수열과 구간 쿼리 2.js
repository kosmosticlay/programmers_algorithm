function solution(arr, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        const [s, e, k] = queries[i];
        let filteredValues = [];
        for (let j = s; j <= e; j++) {
            if (arr[j] > k) {
                filteredValues.push(arr[j]);
            }
        }
        if (filteredValues.length === 0) {
            result.push(-1);
        } else {
            filteredValues.sort((a, b) => a - b);
            result.push(filteredValues[0]);
        }
    }
    return result;
}
