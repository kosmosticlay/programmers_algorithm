const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;

rl.on('line', function (line) {
   n = Number(line);
}).on('close', function () {
    console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`)
});