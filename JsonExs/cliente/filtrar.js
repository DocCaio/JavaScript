const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
       return(
        cliente.edereco.apartamento && 
        !cliente.edereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);