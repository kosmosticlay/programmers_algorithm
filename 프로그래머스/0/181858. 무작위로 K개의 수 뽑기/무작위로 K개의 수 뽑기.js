function solution(arr, k) {
    const setArray = [...new Set(arr)];
    if (setArray.length < k) {
        return [...setArray, ...Array(k - setArray.length).fill(-1)];
    } else { 
        return setArray.slice(0, k)
    }
}