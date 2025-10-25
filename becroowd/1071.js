const { Console } = require('console');

var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

let soma = 0;
function somaImpares(menorNumero, maiorNumero){
    for(let i = menorNumero + 1; i <= maiorNumero - 1; i++){
        if(i % 2 != 0){
            soma = soma + i;
        }
    }
    return soma;
}

let X= parseInt(lines[0]);
let Y= parseInt(lines[1]);

if(X === Y){
    console.log(soma);
}else{

 X < Y ? console.log(somaImpares(X,Y)):console.log(somaImpares(Y, X));
}