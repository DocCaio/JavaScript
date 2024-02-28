//1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

//Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

//Desempenho excelente: média >= 9
//Bom desempenho: 7.5 <= média entre 7.6 e 8.9
//Desempenho regular: 6 <= média entre 6 e 7.5
//Desempenho insuficiente: média < 6
//Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

//Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.

const pessoa = {
    nome: 'Maria',
    notas: [8, 7, 9, 10], // lista de notas
  
    calcularMediaNotas: function () {
      const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
      const media = somaNotas / this.notas.length;
      return media.toFixed(2); // Arredondando para duas casas decimais
    },
  
    classificarDesempenho: function () {
      const media = this.calcularMediaNotas();
  
      if (media >= 9) {
        return 'Desempenho excelente';
      } else if (media >= 7.5 && media < 9) {
        return 'Bom desempenho';
      } else if (media >= 6 && media < 7.5) {
        return 'Desempenho regular';
      } else {
        return 'Desempenho insuficiente';
      }
    }
  };
  
  // Calculando e exibindo a média de notas
  const mediaCalculada = pessoa.calcularMediaNotas();
  console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);
  
  // Classificando o desempenho e exibindo a categoria
  const categoriaDesempenho = pessoa.classificarDesempenho();
  console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);
  