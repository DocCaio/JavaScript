<<<<<<< HEAD
import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
=======

export class ContaCorrente{
    agencia;
    cliente;
>>>>>>> b3e45d790299ad853e8f6a4797a14b8f8fd85a3c


     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    
<<<<<<< HEAD
    get saldo(){
        return this._saldo;
    }
=======
>>>>>>> b3e45d790299ad853e8f6a4797a14b8f8fd85a3c

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

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
