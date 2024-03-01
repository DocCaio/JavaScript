//3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

//id (number): identificador do produto.
//nome (string): nome do produto.
//preco (number): preço do produto.

//Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.


// operacoesJson.js
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
};

// Converte o objeto produto para uma string
const stringJsonProduto = JSON.stringify(produto);

// Imprime no console a string do objeto produto
console.log("String do Produto:");
console.log(stringJsonProduto);
