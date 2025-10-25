var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

let quantidade = parseInt(lines[0]);
let valores = [];
for(let i = 0; i < quantidade; i++){
    valores[i] = parseInt(lines[i+1])
    if(valores[i]===0){
        console.log("NULL")
    }else if(valores[i] < 0){
        valores[i]% 2 ===0 ?  console.log("EVEN NEGATIVE") : console.log("ODD NEGATIVE") 
   }else{
        valores[i]% 2 ===0 ?  console.log("EVEN POSITIVE") : console.log("ODD POSITIVE") 
    }
}
