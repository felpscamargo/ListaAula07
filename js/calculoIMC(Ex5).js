var altura;
var peso;

altura = prompt("Digite sua altura: ");
peso = prompt("Digite seu peso: ");

var imc = peso / (altura * altura);

alert(imc);

if(imc < 18.5){
    alert("Peso abaixo do normal");
}
if(imc >= 18.5 & imc <= 24.9){
    alert("Peso ideal");
}
if(imc >= 25 & imc <= 29.9){
    alert("Acima do peso");
}
if(imc >= 30 & imc <= 34.9){
    alert("Obesidade Grau I");
}
if(imc >= 35 & imc <= 40){
    alert("Obesidade Grau II");
}
if(imc > 40){
    alert("Obesidade Grau III");
}