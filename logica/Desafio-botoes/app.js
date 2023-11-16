let texto = document.querySelector('h1');
texto.innerHTML = 'Hora do Desafio';

function verifiqueBtn() {
    console.log('O botão foi clicado');
}

function verifiqueAlert() {
    console.log('Eu amo JS');
}


function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert(`Estive em ${nomeDaCidade} e lembrei de você`);
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}