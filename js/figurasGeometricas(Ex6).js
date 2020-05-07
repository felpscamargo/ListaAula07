var area;
var base;
var altura;

var geo = prompt("Escolha uma forma geométrica: Quadrado(1), Retângulo(2), Triângulo Retângulo(3) ou Círculo(4)")

if(geo == 1){
    var lado = prompt("Digite a medida do lado do Quadrado ");
    area = lado * lado;
    alert("Área do quadrado: " + area);
}

if(geo == 2){
    base = prompt("Digite a base do Retângulo ");
    altura = prompt("Digite a altura do Retângulo ");
    area = base * altura;
    alert("Área do retangulo: " + area);
}

if(geo == 3){
    base = prompt("Digite a base do Triângulo Retângulo ");
    altura = prompt("Digite a altura do Triângulo Retângulo ");
    area = (base * altura) / 2;
    alert("Área do Triângulo Retângulo: " + area);
}

if(geo == 4){
    var pi = 3.14;
    var raio = prompt("Digite o raio do Círculo ");
    area = pi * (raio * raio);
    alert("Área do Círculo: " + area);
}

else{
    alert("Não identificado");
}