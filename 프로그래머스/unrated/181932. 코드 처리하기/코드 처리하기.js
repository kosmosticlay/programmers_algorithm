function solution(code) {
    let resultArray = [];
    let codeArray = code.split("");
    let mode = 0;

    for (let i = 0; i < codeArray.length; i++) {
        if (codeArray[i] === "1") {
            mode = 1 - mode;
            continue;
        }

        if ((mode === 0 && i % 2 !== 0) || (mode === 1 && i % 2 === 0)) {
            continue; 
        }

        resultArray.push(codeArray[i]);
    }
    if (resultArray.length === 0) {
        return "EMPTY";
    }

    return resultArray.join("");
}
