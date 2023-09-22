<<<<<<< HEAD
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
=======

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }
}
>>>>>>> b3e45d790299ad853e8f6a4797a14b8f8fd85a3c


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);
<<<<<<< HEAD
=======

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log("valor: ", valor)
console.log(conta2);



>>>>>>> b3e45d790299ad853e8f6a4797a14b8f8fd85a3c

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

conta2.saldo = 30000;
console.log(conta2.saldo);


<<<<<<< HEAD
=======
console.log(contaCorrenteRicardo);

>>>>>>> b3e45d790299ad853e8f6a4797a14b8f8fd85a3c
