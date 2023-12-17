const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line]; // 입력된 줄을 input 배열에 저장
}).on('close',function(){
    str = input[0]; // input 배열의 첫번째 요소를 str 변수에 할당
    console.log(str);
});