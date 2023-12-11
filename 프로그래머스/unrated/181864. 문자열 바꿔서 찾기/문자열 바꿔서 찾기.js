function solution(myString, pat) {
    const reversed = myString.split('').map(item => item==='A'? 'B' : 'A').join('')
    return reversed.includes(pat) ? 1 : 0;
}