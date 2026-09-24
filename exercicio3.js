
function receberatemperatura(){
    let c = Number(prompt("Digite a temperatura em C"))
    return c
}

function celsiusParaFahrenheit(convertor){

    let fah = (celsius * 1.8) + 32;
    return fah
}

function exibir(tp){
    alert(`A temperatura em C ${celsius} é de °F ${valor}`)
}
let celsius = receberatemperatura()

let valor = celsiusParaFahrenheit(celsius)

exibir(valor)