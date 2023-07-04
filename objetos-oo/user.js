export default  class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
        constructor(nome, email , nascimento ,role ,ativo = true) {
            this.#nome = nome
            this.#email = email
            this.#nascimento = nascimento
            this.#role = role || 'estudante'
            this.#ativo = ativo
        }

        get nome() {
            return this.#nome
        }

        montaObjUser() {
            return({
                nome: this.#nome,
                email: this.#email,
                nascimento: this.#nascimento,
                role: this.#role,
                ativo: this.#ativo
            })
        }

        exibirInfos() {
            const objUser = this.#montaObjUser()
            return `${objUser.#nome} , ${objUse.#email}   ${objUse.#nascimento} ${objUse.#role} ${objUse.#ativo}`
        }
}

//const novoUser = new User ('Juliana' , 'J@J.com' , '2021-01-01')
//console.log(novoUser)
//console.log(novoUser.exibirInfos())

//console.log(User.prototype.isPrototypeOf(novoUser)) //true