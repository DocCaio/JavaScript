import User from "./user.js";

export default class Admin extends User {

    constructor(nome ,email, nascimento, role = 'admin' ,ativo = true) {
        super(nome ,email, nascimento, role , ativo)
    }

    nomeAdmin() {
        return `${this.nome}`        
    }

    criarCurso() {
        return `Curso de ${nomeDoCurso} criar com ${vagas} vagas `

    }

}

//const novoAdmin = new Admin ('Rodrigo' , 'r@r.com' , '2021-01-01')
//console.log(novoAdmin)
//console.log(novoAdmin.exibirInfos('JS' , 20))