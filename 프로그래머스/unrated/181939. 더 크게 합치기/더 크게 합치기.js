function solution(a, b) {
    let stra = String(a)
    let strb = String(b)
    if (stra+strb === strb+stra) {
        return Number(stra+strb);
    }
    return Number(stra+strb) > Number(strb+stra) ? Number(stra+strb) : Number(strb+stra);
}