function resultado() { 

    var nome = document.getElementById('nome').value;
    var salario = document.getElementById('salario').value;
    var INSS;

        if (salario < 1000.01) {
           INSS = (salario * 0.08)
       } 
        if (1000.02 < salario < 1500) {
           INSS = (salario * 0.085)
       } 
        if (salario > 1500.01) {
           INSS = (salario * 0.09)
       }
   
    var salarioL = (salario - INSS);

    alert("Seu nome de funcionário é:");
    alert(nome);
    alert("Seu salário bruto em reais é:");
    alert(salario);
    alert("Seu desconto do INSS é: ");
    alert(INSS);
    alert("Logo esse é o seu salário líquido:");
    alert(salarioL);
}