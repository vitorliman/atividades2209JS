/*
9. Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array com as notas e calcula
a media dessas notas.
b) avaliarAluno(aluno): recebe um objeto com o nome e as notas do aluno,
calcula a media e verifica se ele foi aprovado ou reprovado.

Entrada: Nome do aluno e um array com suas notas.

Processamento: Somar todas as notas e dividir pela quantidade delas para
encontrar a media. Depois verificar se a media é maior ou igual a 60.

Saida: Mostrar se o aluno foi aprovado ou reprovado.

Eu achei essa questão de dificuldade média, porque precisa trabalhar com
objeto e array ao mesmo tempo. Meu raciocinio foi criar o objeto com o
nome e as notas, depois calcular a media e por ultimo verificar a
situação do aluno.
*/

function pegarAluno() {
    const aluno = {
        nome: prompt("Digite o nome do aluno:")
    }

    let notas = []

    for (let i = 0; i < 3; i++) {
        notas.push(Number(prompt(`Digite a ${i + 1}ª nota do aluno ${aluno.nome}:`)))
    }

    aluno.notas = notas

    return aluno
}

function calcularMediaArray(notas) {
    let soma = 0

    for (let nota of notas) {
        soma += nota
    }

    let media = soma / notas.length

    return media
}

function avaliarAluno(aluno) {
    let media = calcularMediaArray(aluno.notas)

    if (media >= 60) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

function mostrarResultado(aluno, situacao) {
    alert(`O aluno ${aluno.nome} está ${situacao}`)
}

let aluno = pegarAluno()
let resultado = avaliarAluno(aluno)

mostrarResultado(aluno, resultado)