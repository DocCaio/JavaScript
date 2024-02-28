//5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

//marca (string): marca do novo carro.
//modelo (string): modelo do novo carro.
//ano (number): ano de fabricação do novo carro.
//cor (string): cor do novo carro.
//Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

//Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

//Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.

// spreadObjeto.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false // Nova propriedade indicando o estado do carro (ligado/desligado)
};

const carroNovo = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    cor: "Azul"
};

// Utilize o operador spread para criar um novo objeto com as propriedades de carro e carroNovo
const carroComNovosDetalhes = { ...carro, ...carroNovo };

// Imprima no console o objeto carroComNovosDetalhes
console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes
carroComNovosDetalhes.modelo = "Accord";

// Imprima novamente no console o objeto carroComNovosDetalhes
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);
