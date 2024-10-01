function solution(myString, pat) {
    let count = 0;
    let startIndex = myString.indexOf(pat);
    while (startIndex !== -1) {
        count++;
        startIndex = myString.indexOf(pat, startIndex+1);
    }
    
    return count;
}