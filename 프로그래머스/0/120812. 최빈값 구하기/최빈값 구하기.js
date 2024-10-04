function solution(array) {
    const arrayAfterSet = [...new Set(array)]; // [1, 2, 3, 4]
    
    let result = {} // { 숫자(키): count }
    
    const matchedArray = arrayAfterSet.map((el) => {
        let count = array.filter(subEl => subEl === el).length;
        result[el] = count
        return;
    })
    
    // count값이 중복되는 것이 있는지 체크
    const resultValueArray = Object.values(result)
    const maxCount = Math.max(...resultValueArray)
    
    if (resultValueArray.filter(el => el === maxCount).length > 1) {
        return -1;
    } else {
        const matchedKey = Object.entries(result).filter(([key, value]) => value === maxCount).map(([key, value]) => key); 
        return Number(matchedKey)
    }
}