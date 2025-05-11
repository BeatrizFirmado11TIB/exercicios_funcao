function calcularCombustivel(tempo, velocidade) {
    let distancia = tempo * velocidade
    let consumo = 12
    let quantidadeCombustivel= distancia / consumo
    return quantidadeCombustivel
}

let viagem1 = calcularCombustivel(10, 85);
let viagem2 = calcularCombustivel(2, 92);
let viagem3 = calcularCombustivel(22, 67);

console.log(`VIAGEM 1 = gastou ${viagem1.toFixed(3)} litros`);
console.log(`VIAGEM 2 = gastou ${viagem2.toFixed(3)} litros`);
console.log(`VIAGEM 3 = gastou ${viagem3.toFixed(3)} litros`);