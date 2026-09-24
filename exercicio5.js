function recebaarray(){
    const valores = []
    let tamanho = Number(prompt("Digite os valores:"))
    for(let i = 0; i < tamanho; i ++){
        valores[i] = Number(prompt(`Digite o ${i + 1}° valor`))
    }
    return valores
}

function somaelementos(vetor){

    let soma = 0

    for(let elemento of vetor){
        soma += elemento
    }   
    return soma
}


function exibir(resultado){
    alert(`O valor da soma é: ${resultado} `)
}

const array = recebarray()

let resultado = somaelementos(array)

exibir(resultado)