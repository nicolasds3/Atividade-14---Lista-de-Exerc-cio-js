// Primeiro exercicio.

// criando as variaveis e mostrando elas

var Num1 = 2;
var Num2 = 3;

console.log("O primeiro número é", Num1);
console.log("O segundo número é", Num2);

// essa função mostra a diferença

function diferenca() {
  if (Num1 < Num2) {
    console.log("O primeiro número é menor que o segundo número!!!");
    return true
  } else {
    return false
  }
}

console.log(diferenca());

// essa função faz as contas de dobro e triplo

function operacoes() {
  var resultado = (Num1*2) + (Num2*3)
  console.log("O dobro da primeira variável mais o triplo da segunda variável é", resultado);
  return true
}

console.log(operacoes())

// essa função faz as operações de multuiplicação

function multiplicacao() {
  var resultado2 = (Num1*Num2)
  console.log("O resultado da multiplicação do primeiro número pelo segundo número é", resultado2);
  return true 
}

console.log(multiplicacao());

// essa função mostra os numeros maiores e menores

function maiorMenor() {
  if (Num1 < Num2) {
    console.log("O valor crescente das variáveis é", Num1, "e", Num2);
    return true
  } else {
    return false
  }
}

console.log(maiorMenor());