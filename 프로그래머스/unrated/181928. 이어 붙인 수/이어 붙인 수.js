function solution(num_list) {
    let odd = [];
    let even = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 !== 0) {
           odd.push(num_list[i]) 
        } else {
            even.push(num_list[i])
        }
    }
    
    let oddNum = odd.join("")
    let evenNum = even.join("")

    return parseInt(oddNum) + parseInt(evenNum);
}