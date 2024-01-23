//Crie uma função que receba o nome de
//uma pessoa como argumento e retorne uma
//saudação personalizada. Em seguida, chame 
// a função e exiba a saudação no console.

function cumprimentarPessoa(nome) {
    return `Olá, ${nome}! Como vai?`;
}

const nomeDaPessoa = 'Ana';
const saudacao = cumprimentarPessoa(nomeDaPessoa);

console.log(saudacao); // Saída: Olá, Ana! Como vai?

