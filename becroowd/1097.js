var input = require('fs').readFileSync("stdin.txt", "utf-8");
var lines = input.split('\n');

let i = 1;
let j = 7;
let contador = 0;

while(i <= 9) {
    
    console.log(`I=${i} J=${j--}`);

    contador++;
    if(contador === 3){
        contador = 0;
        j+=5;
        i+=2;
    }
}