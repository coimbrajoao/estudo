var input = require('fs').readFileSync('stdin.txt', 'utf-8');
var lines = input.split('\n');

let j = 60;
let i = 1;

while (j >= 0) {
    console.log(`I=${i} J=${j}`);
    j-=5;
    i+=3;
}