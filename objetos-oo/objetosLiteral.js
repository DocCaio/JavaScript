const user = {
    nome: "Juliana",
    email: "c@c.com",
    nascimento:"2021/01/01",
    role:"admin",
    ativo: true,
    exeibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//herança de protótipo