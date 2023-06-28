const cliente = {
    nome: "Joao",
    idade:24,
    email:"Joao@forma.com",
    telefone:["11555550" , "1144440"],
    
};

cliente.enderecos = [
     {
    rua: "R. Joseph Clienber",
    numero: 1337,
    apartamento:true,
    complemento: "ap 934",
},
];

cliente.enderecos.push({
    rua:"R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartementos = cliente.enderecos.filter(
    (ednereco) => endereco.apartamento === true
);

console.log(listaApenasApartementos);