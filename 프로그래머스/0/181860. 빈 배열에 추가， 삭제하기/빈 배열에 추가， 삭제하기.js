function solution(arr, flag) {
    const answer = [];
    flag.forEach((el, idx) => {
        if (el) {
            for (let i = 0; i < arr[idx] * 2; i++) {
                answer.push(arr[idx]);
                // console.log(answer)
            }
        } else {
            answer.splice(answer.length - arr[idx], arr[idx]);
        }
    });
    return answer;
}
