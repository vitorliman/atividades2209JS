//Achei a questão relativamente dificil, demorei 40 minutos pra resolver, confundi a parte de declarar, mas consegui resolver




function calcularAreaRetangulo (base, altura){

      let area = base * altura


      return area
}
   
let n1 = Number(prompt("digite a base"))

let n2 = Number(prompt("digite a altura"))

let resultado = calcularAreaRetangulo(n1, n2)

alert(`A área é: ${resultado}`)