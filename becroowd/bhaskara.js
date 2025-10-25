var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');


var numeros = lines[0].trim().split(' ').map(Number);

var delta = Math.pow(numeros[1],2) - 4 * numeros[0] * numeros[2]
if((delta < 0) || (numeros[0] ===0)){
    console.log("impossivel calcular")
}


let r1 = (-numeros[1] + Math.sqrt(delta)) / (numeros[0] * 2)

let r2 = (-numeros[1] - Math.sqrt(delta)) / (numeros[0] * 2)

console.log(`$R1 = {r1.toFixed(5)}`)
console.log(r2.toFixed(5))