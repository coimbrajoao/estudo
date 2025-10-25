var input = require('fs').readFileSync('stdin.txt', 'utf-8');
var lines = input.split('\n');

let testes = parseInt(lines[0]);
let cobaias= [];
let totalCobaias = 0;
let totalCoelhos =0;
let totalRatos = 0;
let totalSapos = 0;


for(let i = 1; i <= testes; i++){
    cobaias.push(lines[i].trim().split(' '));
}

for(let i = 0; i < cobaias.length; i++){
    totalCobaias = totalCobaias + parseInt(cobaias[i][0]);
    if(cobaias[i][1] === 'R'){
        totalRatos = totalRatos + parseInt(cobaias[i][0]);
    }else if(cobaias[i][1] ==='S'){
        totalSapos = totalSapos + parseInt(cobaias[i][0]);
    }else{
        totalCoelhos = totalCoelhos + parseInt(cobaias[i][0]);
    }
}

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`)
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${((totalCoelhos *100)/totalCobaias).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((totalRatos *100)/totalCobaias).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((totalSapos *100)/totalCobaias).toFixed(2)} %`);
