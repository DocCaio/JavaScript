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

user.exeibirInfos()

const exibir = function() {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()

//const exibir = user.exeibirInfos
//exibir()

//herança de protótipo