function verificaParOuImpar (numero) {
    if (numero % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
}

console.log(verificaParOuImpar(8));

function calcularValorPintura(largura, altura, precoPorMetroQuadrado) {

    let area = largura * altura;
    
    let valorCobrado = area * precoPorMetroQuadrado;
    
    return valorCobrado;
}

let largura = 10; 
let altura = 22.5; 
let precoPorMetroQuadrado = 10; 


let valor = calcularValorPintura(largura, altura, precoPorMetroQuadrado);
console.log("O valor é: R$ " + valor);

