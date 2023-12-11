function solution(arr, n) {
    if (arr.length % 2 === 0) {
        return arr.map((item, index, array) => {
            return index % 2 === 1 ? item + n : item           
        })
    } else {
        return arr.map((item, index, array) => {
            return index % 2 === 0 ? item + n : item
        })
    } 
}
