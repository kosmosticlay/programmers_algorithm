function solution(numLog) {
    let result = []
    for (let i = 0; i < numLog.length; i++) {
        let difference = numLog[i+1] - numLog[i];
        if(difference === 1) {
            result.push('w')
        } else if (difference === -1) {
            result.push('s')
        } else if (difference === 10) {
            result.push('d')
        } else if (difference === -10) {
            result.push('a')
        }
    }
    return result.join("")
    console.log(result)
}