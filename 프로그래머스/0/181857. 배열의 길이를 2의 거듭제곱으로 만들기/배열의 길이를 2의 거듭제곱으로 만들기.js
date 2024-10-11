function solution(arr) {
    const initialLength = arr.length;
    
    let i = 0;
    while (2 ** i < initialLength) {
        i++;
    }
    
    const targetLength = 2 ** i;    
    const result = [...arr, ...Array(targetLength - initialLength).fill(0)];
    
    return result;
}
