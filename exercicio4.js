//A partir de resolver os exercíos anteriores voce consegue entender logia de função, e raciocinar pra resolver os seguintes

function rv(parametro){

    if(parametro){
        let  n1 = Number(prompt("Digite seu peso em Kg:"))
        return n1
    } else{
        let  n2 = Number(prompt("Digite sua altura em Kg:")) 
        return n2
    }
    
}

function calculoimc(h, p){
    let result = p/(h*h)
    return result
}

function rater(im){
    if(im < 18.5){
        alert("Abaixo do peso")
    }else if(im > 18.5 && im < 24.9){
        alert("Peso Normal")
    }else{
        alert("Sobrepeso")
    }
}

let altura = rv(0)
let peso = rv(1)

let imc = calculoimc(altura, peso)

rater(imc)