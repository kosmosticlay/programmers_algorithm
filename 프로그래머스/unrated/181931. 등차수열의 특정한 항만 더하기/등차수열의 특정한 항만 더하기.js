function solution(a, d, included) {
    const trueIndex = included.map((element, index) => (element === true ? index : -1))
  .filter(index => index !== -1)
    
    const sequence = [];
    for (let i = 0; i < included.length; i++) {
        if (i===0) {
            sequence.push(a)
        } else {
            sequence.push(sequence[i-1]+d)
        }
    }
    return trueIndex.map((item) => sequence[item]).reduce((acc, cur) => acc + cur)
}