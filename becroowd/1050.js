

var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

let DDD = lines[0].trim().split().map(Number);

let cadastro = [61,71,11,21,32,19,27,31]
let destino = ['Brasilia', 'Salvador', 'Sao Paulo', 'Rio de Janeiro','Juiz de Fora', 'Campinas', 'Vitoria', 'Belo horizonte']
let cidade;
let cadastrado;

for(let i = 0; i < cadastro.length; i++){
    
    if(DDD == cadastro[i]){
        cidade = destino[i];
        cadastrado = true;
        break;
    }
    cadastrado = false
}

if(cadastrado === true){
    console.log(cidade);
}else{
    console.log("DDD nao cadastrado")
}