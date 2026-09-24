essa questao é simples eu o secebi uma temé
function ehPar(parimpar) {
    return parimpar % 2 === 0;
}

function recebernumero() {
    let numero = Number(prompt("Digite um numero:"));
    return numero;
}

function exibir(numero, ehParOuImpar) {
    if (ehParOuImpar) {
        alert(`O numero ${numero} é Par!`);
    } else {
        alert(`O numero ${numero} é Ímpar!`);
    }
}

let valor = recebernumero();
let resultado = ehPar(valor);
exibir(valor, resultado);