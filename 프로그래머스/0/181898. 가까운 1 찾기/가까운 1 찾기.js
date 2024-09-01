/* 문제오류 : 'idx보다 같거나 크면서'가 옳은 표현 */
function solution(arr, idx) {
    const result = arr.slice(idx).findIndex(el => el === 1);
    return result === -1 ? -1 : result + idx;
}