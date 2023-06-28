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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
};