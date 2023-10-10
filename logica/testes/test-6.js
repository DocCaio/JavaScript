//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos. linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
//let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Crie uma função que mostra no console todos os elementos da lista linguagensDeProgamacao separadamente.
function mostrarLinguagensSeparadamente() {
  for (let i = 0; i < linguagensDeProgramacao.length; i++) {
    console.log(linguagensDeProgramacao[i]);
  }
}

mostrarLinguagensSeparadamente();

//Crie uma função que mostra no console todos os elementos da lista linguagensDeProgamacao separadamente de maneira inversa.
function mostrarLinguagensReversoSeparadamente() {
  for (let i = linguagensDeProgramacao.length - 1; i >= 0; i--) {
    console.log(linguagensDeProgramacao[i]);
  }
}

mostrarLinguagensReversoSeparadamente();

//Crie uma função que calcula a média dos elementos em uma lista de números.
function calcularMedia(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma / lista.length;
}

//let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

//Crie uma função que mostra no console o maior e o menor número em uma lista.
function encontrarMaiorMenor(lista) {
  let maior = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Maior:', maior);
  console.log('Menor:', menor);
}

//let numeros = [15, 8, 25, 5, 12];
encontrarMaiorMenor(numeros);

//Crie uma função que retorna a soma de todos os elementos em uma lista.
function calcularSoma(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

//let numeros = [15, 8, 25, 5, 12];
let soma = calcularSoma(numeros);
console.log('Soma:', soma);

//Crie uma função que recebe uma lista como parâmetro e retorne o índice de um elemento também passado como parâmetro. Caso esse elemento não exista na lista, retorne -1.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna o índice do elemento encontrado
    }
  }
  return -1; // Retorna -1 se o elemento não for encontrado na lista
}

//let numeros = [15, 8, 25, 5, 12];
let indiceEncontrado = encontrarIndiceElemento(numeros, 25);
console.log('Índice de 25:', indiceEncontrado); // Deve imprimir o índice 2

//Crie uma função que recebe duas listas de números do mesmo tamanho e retorna uma nova lista com a soma elemento a elemento.
function somarListas(lista1, lista2) {
  let novaLista = [];
  for (let i = 0; i < lista1.length; i++) {
    novaLista.push(lista1[i] + lista2[i]);
  }
  return novaLista;
}
let listaA = [1, 2, 3];
let listaB = [10, 20, 30];
console.log('Soma de listas:', somarListas(listaA, listaB));

//Crie uma função que recebe uma lista de números e retorna uma nova lista com o quadrado de cada número.
function quadradoDeCadaNumero(lista) {
  let novaLista = [];
  for (let i = 0; i < lista.length; i++) {
    novaLista.push(lista[i] * lista[i]);
  }
  return novaLista;
}

let numeros = [2, 3, 4, 5, 6];
let listaQuadrados = quadradoDeCadaNumero(numeros);
console.log('Lista de Quadrados:', listaQuadrados);