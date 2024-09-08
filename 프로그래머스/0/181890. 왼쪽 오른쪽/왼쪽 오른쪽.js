function solution(str_list) {
    const lIndex = str_list.indexOf("l");
    const rIndex = str_list.indexOf("r");
    
    console.log(lIndex, rIndex)

    if (lIndex === -1 && rIndex === -1) {
        return [];
    } else if (lIndex === -1 && rIndex >= 0) {
        return str_list.slice(rIndex+1);
    } else if (lIndex >=0 && rIndex === -1) {
        return str_list.slice(0, lIndex);
    } else if (lIndex >=0 && rIndex >= 0) {
        return lIndex < rIndex ? str_list.slice(0, lIndex) : str_list.slice(rIndex+1);
    }
    
}