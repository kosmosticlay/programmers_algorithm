/* ∧는 AND(둘다 T여야 T), ∨는 OR(하나라도 T면 T)처럼 작동 */

function operateOR(a, b) {
    return a || b;
}

function operateAND(a, b) {
    return a && b;
}

function solution(x1, x2, x3, x4) {
    const firstResult = operateOR(x1, x2);
    const secondResult = operateOR(x3, x4);
    const totalResult = operateAND(firstResult, secondResult)
    return totalResult;
}