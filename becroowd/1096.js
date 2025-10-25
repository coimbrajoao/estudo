var input = require('fs').readFileSync('stdin.txt', 'utf-8');
var lines = input.split('\n');

let j = 7;
let i = 1;

while (i <= 9) {
    console.log(`I=${i} J=${j--}`);
    if(j == 4){
        i += 2;
        j = 7;
    }
    
}