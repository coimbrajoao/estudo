var input = require('fs').readFileSync('stdin.txt', 'utf-8');
var lines = input.split('\n');


let maior =0;
let posicao =0 ;
for(let i = 0; i <=100; i++){
    let numero = parseInt(lines[i]);
    if(maior < numero){
        maior = numero;
        posicao = i+1;
    }
}

console.log(maior);
console.log(posicao);
