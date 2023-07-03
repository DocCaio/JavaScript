const user = {
    nome: "estudante",
    email: "c@c.com",
    nascimento:"2021/01/01",
    role:"admin",
    ativo: true,
    exeibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email:"m@m.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado !')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exeibirInfos()

//user.exeibirInfos()

//const exibir = function() {
//    console.log(this.nome)
//}

//const exibirNome = exibir.bind(user)
//exibirNome()
//exibir()

//const exibir = user.exeibirInfos
//exibir()

//herança de protótipo