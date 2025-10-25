var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

let valores = lines[0].trim().split(' ').map(Number);

valores.sort((a,b)=> b-a);

const [A, B, C]= valores;

if (A >= (B + C)) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (Math.pow(A, 2) === (Math.pow(B, 2) + Math.pow(C, 2))) {
        console.log("TRIANGULO RETANGULO");
    } else if (Math.pow(A, 2) > (Math.pow(B, 2) + Math.pow(C, 2))) {
        console.log("TRIANGULO OBTUSANGULO");
    } else if(Math.pow(A, 2) < (Math.pow(B, 2) + Math.pow(C, 2))) {
        console.log("TRIANGULO ACUTANGULO");
    }

    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    } else if (A === B || B === C || A === C) {
        console.log("TRIANGULO ISOSCELES");
    }
}