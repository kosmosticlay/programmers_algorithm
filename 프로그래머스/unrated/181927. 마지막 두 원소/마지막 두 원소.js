function solution(num_list) {
    let arrayLength = num_list.length
    if (num_list[arrayLength-1] > num_list[arrayLength-2]){
        num_list.push(num_list[arrayLength-1] - num_list[arrayLength-2]);
    } else {
        num_list.push(num_list[arrayLength-1] * 2);
    }
    return num_list
}