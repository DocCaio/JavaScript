//3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

//Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

//ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
//ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
//desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
//obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
//Em seguida, faça o seguinte:

//Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
//Chame o método obterDetalhes e imprima no console a string retornada.

// Definindo o objeto carro com as propriedades iniciais
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata',
    ligado: true, // Propriedade para indicar se o carro está ligado ou desligado
  
    // Método para ligar o carro
    ligar: function () {
      if (!this.ligado) {
        this.ligado = true;
        console.log('O carro está ligado.');
      } else {
        console.log('O carro já está ligado.');
      }
    },
  
    // Método para desligar o carro
    desligar: function () {
      if (this.ligado) {
        this.ligado = false;
        console.log('O carro está desligado.');
      } else {
        console.log('O carro já está desligado.');
      }
    },
  
    // Método para obter detalhes do carro
    obterDetalhes: function () {
      const estado = this.ligado ? 'ligado' : 'desligado';
      return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
  };
  
  // Testando os métodos
  carro.ligar(); // Tentar ligar o carro quando já está ligado
  carro.desligar(); // Desligar o carro
  carro.desligar(); // Tentar desligar o carro quando já está desligado
  carro.ligar(); // Ligar o carro
  console.log(carro.obterDetalhes()); // Obter detalhes do carro e imprimir no console
  