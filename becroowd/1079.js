var input = require('fs').readFileSync('stdin.txt', 'utf-8');
var lines = input.split('\n');

function mediaPonederada(testeLinha){
    const notas = testeLinha.trim().split(' ').map(Number);
    var soma = notas[0] * 2 + notas[1] *3 + notas[2] * 5;
    return (soma/10).toFixed(1);
}

let testes =  parseInt(lines[0]);

for(let i = 1; i<= testes; i++){
    console.log(mediaPonederada(lines[i]));
}