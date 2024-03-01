//3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:

//id (number): identificador do produto.
//nome (string): nome do produto.
//preco (number): preço do produto.

//Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.

//Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.

// filtrarOrdenarProdutos.js

// Array de objetos representando produtos
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
];

// Função para filtrar e ordenar produtos por preço
function filtrarOrdenarProdutosPorPreco(maxPreco) {
    const produtosFiltrados = listaProdutos.filter(produto => produto.preco <= maxPreco);
    return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}

// Filtra e ordena os produtos com preço até 50.00 e imprime no console
const produtosAte50 = filtrarOrdenarProdutosPorPreco(50.00);
console.log("Produtos com preço até 50.00 (ordenados por preço crescente):");
console.log(produtosAte50)
