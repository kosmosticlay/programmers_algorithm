function solution(strArr) {
    const lengthArr = strArr.map(el => el.length); // [ 1, 2, 1, 3, 2 ]
    const lengthSet = new Set(lengthArr)
    
    const countArr = [...lengthSet].map(countEl => {
        let num = 0;
        lengthArr.forEach(lenEl => {
            if (lenEl === countEl) num++;
        })
        return num;
    })
    
    return Math.max(...countArr)
}