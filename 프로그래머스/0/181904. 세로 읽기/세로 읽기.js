function solution(my_string, m, c) {
    const result = [...my_string].filter((str, i) => {
        return i % m === c - 1;
    });
    
    return result.join('');
}

/* 
m=4, c=2
0123
ihrh
4567
bakr
891011
fpnd

1, 5, 9, 13...
*/