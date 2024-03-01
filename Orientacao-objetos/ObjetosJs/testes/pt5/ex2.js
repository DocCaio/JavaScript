//2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:

//id (number): identificador do filme.
//titulo (string): título do filme.
//diretor (string): nome do diretor.
//anoLancamento (number): ano de lançamento do filme.

//Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

//Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.

// filtrarObjetoJson.js

// Array de objetos representando filmes
const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

// Função para filtrar filmes por ano de lançamento
function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}

// Filtra os filmes lançados em 1999 e imprime no console
const filmesAno1999 = filtrarFilmesPorAno(1999);
console.log("Filmes Lançados em 1999:");
console.log(filmesAno1999);

// Filtra os filmes lançados em 2010 e imprime no console
const filmesAno2010 = filtrarFilmesPorAno(2010);
console.log("\nFilmes Lançados em 2010:");
console.log(filmesAno2010)
