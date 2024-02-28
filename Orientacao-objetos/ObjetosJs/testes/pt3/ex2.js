//2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

//marca (string): marca do carro.
//modelo (string): modelo do carro.
//ano (number): ano de fabricação do carro.
//cor (string): cor do carro.
//Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

//Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

//Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.

// forInObjetos.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

// Utilize o loop for...in para percorrer as propriedades do objeto carro
console.log("Propriedades iniciais do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Adicione mais propriedades ao objeto carro
carro.cambio = "Automático";
carro.kmRodados = 5000;

// Utilize novamente o loop for...in para percorrer as propriedades atualizadas do objeto carro
console.log("\nPropriedades atualizadas do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
