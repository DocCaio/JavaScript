const cliente = {
    nome: "Joao",
    idade:24,
    email:"Joao@forma.com",
    telefone:["11555550" , "1144440"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
        console.log("Saldo insuficiente");
        }
        else{
           this.saldo -= valor;
           console.log(`Pagamneto realizado. Nobvo saldo: ${this.saldo}`);

        }
    },    
    
};

cliente.efetuaPagamento(250);