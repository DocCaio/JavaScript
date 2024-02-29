//5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

//id (number): identificador da pessoa.
//nome (string): nome da pessoa.
//idade (number): idade da pessoa

//Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

//Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

//Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.



// copiarObjetoJson.js

// Função para copiar objetos JSON
function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// Criação do objeto original (pessoa)
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};

// Utiliza a função para criar uma cópia do objeto original
const pessoaModificada = copiarObjetoJson(pessoaOriginal);

// Modifica a cópia do objeto (pessoa modificada)
pessoaModificada.idade = 31;

// Imprime no console ambos os objetos
console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)
