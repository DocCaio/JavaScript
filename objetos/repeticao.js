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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
    
    console.log(` A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}

