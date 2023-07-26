const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-a-ajuste");

controle.forEach ( (elemento) => {
     elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)

     })
})





function manipulaDados(operacao) {
    if(operacao === "_") { 
        braco.value = parseInt(braco.value) - 1
    }else {
        braco.value = parseInt(braco.value) + 1
    }
}

