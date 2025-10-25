var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines[0]);

for(let i = 1; i <= numero; i++){
    if(i % 2 ===0){
        console.log(i + "^2 = "+ Math.pow(i, 2))
    }
}
