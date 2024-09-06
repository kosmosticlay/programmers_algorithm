function solution(arr, query) {
    let result = arr;
    for (let i = 0; i < query.length; i ++) {
        if (i % 2 === 0 ) {
            result = result.slice(0, query[i]+1);
            console.log("짝수", i, query[i], result);
        } else {
            result = result.slice(query[i]);
            console.log("홀수", i, query[i], result);
        }
    }
    return result;
}