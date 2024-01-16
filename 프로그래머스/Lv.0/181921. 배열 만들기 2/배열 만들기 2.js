function solution(l, r) {
    let result = [];


    for (let i = l; i <= r; i++) {

        let str_i = i.toString();

        if (/^[0|5]+$/.test(str_i)) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        return [-1];
    }

    return result;
}