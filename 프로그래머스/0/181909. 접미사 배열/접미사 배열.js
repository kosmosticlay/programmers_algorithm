function solution(my_string) {
    const strArray = [...my_string];
    const newArray = [];
    strArray.map((str, index, array) => {
        newArray.push(array.slice(index).join(''))
    })
    return newArray.sort()
}