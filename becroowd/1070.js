var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

const numero = parseInt(lines[0]);
let soma = 0;
if(numero % 2 == 0){
    soma = numero + 1
}else{
    soma = numero;
}

for(let i = 0; i < 6; i++){
    if(soma % 2 != 0){
        console.log(soma)
    }
    soma = soma + 2;
}