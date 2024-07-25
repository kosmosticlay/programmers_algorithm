function solution(my_strings, parts) {
    
    const stringPartsArray = [];
    for (let i = 0; i < my_strings.length; i++) {
        const part = my_strings[i].slice(parts[i][0], parts[i][1]+1)
        stringPartsArray.push(part);
    }
    return stringPartsArray.join('');
}