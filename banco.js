function banco (conta, saldo, tipo, agencia){
    this.conta=conta
    this.saldo=saldo
    this.tipo=tipo
    this.agencia=agencia

    this.numerodaconta=function(numerodaconta){
        return(numerodaconta)
    }
    this.buscarsaldo=function(){
        return(this.saldo)
    }
    this.deposito=function(deposito){
        this.saldo+=deposito
    }
    this.saque=function(saque){
        this.saldo-=saque
    }
}

let NB=new banco ('00001', 1000, 'PF', '01')
console.log('Número da conta: ' + NB.conta)
console.log('Saldo atual: ' + NB.saldo)
console.log(NB.tipo)
console.log('Agencia: ' + NB.agencia)

NB.deposito(1000)
console.log('Saldo atualizado: ' + NB.saldo)
NB.saque(50)
console.log('Saldo atualizado: ' + NB.saldo)
