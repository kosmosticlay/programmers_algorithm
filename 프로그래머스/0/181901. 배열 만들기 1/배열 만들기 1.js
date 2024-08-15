n=15, k=5
function solution(n, k) {
    const answer = [];
    for (let i=1; i <= (n/k); i++){
        answer.push(i*k)
    }
    return answer;
}
