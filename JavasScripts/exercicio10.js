/*
10. Escreva um programa para analisar uma turma com 4 alunos.

Entrada: Nome e nota de cada um dos 4 alunos.

Processamento: Verificar a nota de cada aluno para saber se ele foi
aprovado e contar quantos alunos conseguiram a nota minima.

Saida: Mostrar no console a quantidade de alunos aprovados.

Eu achei essa questão de dificuldade média para facil, porque precisa
usar array de objetos e tambem fazer uma função chamar outra. Meu
raciocinio foi criar uma função para cadastrar os alunos, outra para
verificar a situação de cada um e contar os aprovados e depois mostrar
o resultado no console.
*/

function executarAnalise() {
    const alunos = []

    for (let i = 0; i < 4; i++) {
        const aluno = {
            nome: prompt(`Digite o nome do ${i + 1}º aluno:`),
            nota: Number(prompt(`Digite a nota do ${i + 1}º aluno:`))
        }

        alunos.push(aluno)
    }

    let aprovados = contarAprovados(alunos)

    console.log(`O numero de alunos aprovados foi ${aprovados}`)
}

function contarAprovados(listaAlunos) {
    let quantidadeAprovados = 0

    for (let aluno of listaAlunos) {
        if (verificarAprovacao(aluno.nota)) {
            quantidadeAprovados++
        }
    }

    return quantidadeAprovados
}

function verificarAprovacao(nota) {
    if (nota >= 60) {
        return true
    } else {
        return false
    }
}

executarAnalise()