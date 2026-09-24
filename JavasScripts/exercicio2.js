//A tarefa é relativamente simples, entretanto demorei a entender a lógica.  coloquei dentro de uma condicao de se for divisivel por 2 com resto 0 


function ehPar(parimpar) {
    if (parimpar % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function recebernumero() {
    let numero = Number(prompt("Digite um numero:"));
    return numero;
}

function exibir(tela) {
    if (tela) {
        alert(`O numero ${valor} é Par!`);
    } else {
        alert(`O numero ${valor} é Ímpar!`);
    }
}

let valor = recebernumero();
let resultado = ehPar(valor);
exibir(resultado);