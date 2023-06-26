const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet = new Set();

//const nomesAtualizados = [...meuSet];


const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
