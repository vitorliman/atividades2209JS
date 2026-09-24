//A partir de resolver os exercíos anteriores voce consegue entender logia de função, eeu pensei que deveria receber o peso da pessoa para calcular o imc, fazendo a condiçao de se é peso normal ou sobrepeso. 

function rv(parametro){
    if(parametro){
        let n1 = Number(prompt("Digite seu peso em Kg:"));
        return n1;
    } else {
        let n2 = Number(prompt("Digite sua altura em metros:")); 
        return n2;
    }
}

function calculoimc(h, p){
    let result = p / (h * h);
    return result;
}

function rater(im){
    if(im < 18.5){
        alert("Abaixo do peso");
    } else if(im >= 18.5 && im <= 24.9){
        alert("Peso Normal");
    } else {
        alert("Sobrepeso");
    }
}

let altura = rv(false);
let peso = rv(true);

let imc = calculoimc(altura, peso);
rater(imc);