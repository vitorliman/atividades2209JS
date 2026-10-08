/*
7. Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem
de desconto e retorna o valor com o desconto.
b) processarVenda(valorBruto): verifica se o valor é maior que 100.
Se for, aplica 10% de desconto. Caso contrario, mantém o valor original.

Entrada: Valor da venda.

Processamento: Verificar o valor da compra e, caso seja maior que 100,
aplicar o desconto de 10%.

Saida: Mostrar o valor final da venda.

Eu achei essa questão facil, porque a condição é bem simples de entender.
Meu raciocinio foi primeiro criar a função que faz o desconto e depois
usar ela dentro da função que verifica se o valor precisa ou não do
desconto.
*/

function pegarValor() {
    let valor = Number(prompt("Digite o valor da compra:"))

    return valor
}

function aplicarDesconto(valor, percentual) {
    let desconto = valor * (percentual / 100)
    let valorFinal = valor - desconto

    return valorFinal
}

function processarVenda(valorBruto) {
    if (valorBruto > 100) {
        return aplicarDesconto(valorBruto, 10)
    } else {
        return valorBruto
    }
}

function mostrarValor(valor) {
    alert(`O valor final da compra é R$ ${valor}`)
}

let valor = pegarValor()
let resultado = processarVenda(valor)

mostrarValor(resultado)