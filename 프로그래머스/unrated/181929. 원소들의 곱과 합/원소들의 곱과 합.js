function solution(num_list) {
    let multiplyNums = num_list.reduce((pre, cur)=> pre * cur, 1);
    let sumNums = Math.pow(num_list.reduce((pre, cur) => cur + pre, 0), 2);
    return multiplyNums < sumNums ? 1 : 0;
}