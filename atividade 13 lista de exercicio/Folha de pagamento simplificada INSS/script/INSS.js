function resultado() { 

// isso chama as variaveis do html

    var nome = document.getElementById('nome').value;
    var salario = document.getElementById('salario').value;

// essa são as variaveis das contas

    var INSS = (salario*0.08);
    var salarioL = (salario - INSS);

// isso fala o resultado

    alert("Seu nome de funcionário é:");
    alert(nome);
    alert("Seu salário bruto em reais é:");
    alert(salario);
    alert("Seu desconto do INSS é 8%. E essa é a quantidade tirada do seu sálario:");
    alert(INSS);
    alert("Logo esse é o seu salário líquido:");
    alert(salarioL);
}