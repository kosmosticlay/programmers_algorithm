function solution(arr) {
    const stk = [];
    arr.map((el, idx) => {
        if (stk.length === 0 || stk[stk.length - 1] !== el) {
            stk.push(el);
        } else {
            stk.pop(el);
        }
    })
    console.log(stk)
    return stk.length === 0 ? [-1] : stk;

}