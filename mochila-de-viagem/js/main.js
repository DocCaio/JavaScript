const form = document.getElementById("novoItem");

form.addEventListener("submit" ,(evento) => {
    evento.preventDefault()
    criaElemento(evento.target.elements['nome'].value, quantidade);
  
});

function criaElemento(nome, quantidade) {
const novoItem = document.createElement('li');
novoItem.classList.add("item")

const numeroItem = document.createElement('strong')
numeroItem.innerHTML = quantidade

novoItem.innerHTML = numeroItem + nome
}