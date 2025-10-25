var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

let contador = 0;
let numeros = []
for(let i = 0; i < 5; i++){
    numeros[i] = parseInt(lines[i]);
}

for(let i = 0; i < 5; i++){
    if(numeros[i] % 2 ===0){
        contador= contador+ 1
    }
}

console.log(contador + " valores pares")

