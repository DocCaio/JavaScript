//1 - Crie um arquivo chamado dados.json 
//contendo informações fictícias em formato 
//JSON. O arquivo pode representar, por exemplo,
 //dados de produtos, usuários ou qualquer outra
 // informação que você deseje.

 //Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.

 //Imprima no console o conteúdo importado utilizando a função console.log().
 
 //Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.

 // utilizarRequire.js
const dados = require('./dados.json');

// Imprime no console o conteúdo importado
console.log("Conteúdo importado de dados.json:");
console.log(dados);

// Acessa diferentes propriedades do objeto importado e imprime no console
console.log("\nAcesso aos dados:");
console.log("Produtos:", dados.produtos);
console.log("Usuários:", dados.usuarios);
