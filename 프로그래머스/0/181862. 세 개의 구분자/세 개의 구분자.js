function solution(myStr) {
    const regExp = /[abc]/;
    const result = myStr.split(regExp).filter((str) => str !== "")

    if (result.length === 0) return ["EMPTY"];
    return result;
}