var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

function extrairDados(diasLinhas, horaLinha){
    const dia = parseInt(diasLinhas.split(' ')[1]);
    const partesHoras = horaLinha.trim().split(' : ').map(Number);

    return{
        soma:  (dia * 24 * 3600) + (partesHoras[0] * 3600) + (partesHoras[1] * 60 ) + partesHoras[2]
    };
}

function conversao(totalSegundos, segundosPorDia){
    const dias = parseInt(totalSegundos / segundosPorDia);
    const resto = parseInt(totalSegundos - (Math.floor(dias) * segundosPorDia));
    const horas = parseInt(resto / 3600);
    const minutos = parseInt((resto - (Math.floor(horas)* 3600))/60);
    const segundos = resto - (horas * 3600) - (minutos * 60);

    return{
        dias: dias, 
        horas: horas,
        minutos: minutos,
        segundos: segundos  
    };
    
}


const inicio = extrairDados(lines[0], lines[1]);
const fim = extrairDados(lines[2], lines[3]);

let diferenca = fim.soma - inicio.soma;

let diasTotais = conversao(diferenca, 86400);

console.log(`${diasTotais.dias} dia(s)`);
console.log(`${diasTotais.horas} hora(s)`);
console.log(`${diasTotais.minutos} minuto(s)`);
console.log(`${diasTotais.segundos} segundo(s)`);