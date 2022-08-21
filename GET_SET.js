class compra {
    constructor (codigo, remetente, destinatario){
        this._codigo = codigo
        this._remetente = remetente
        this._destinatario = destinatario  
    }
    get novocodigo(){
        return this._codigo
    }
    set novocodigo (novocodigo){
        return this._codigo = novocodigo
    }

    get novoremetente (){
        return this._remetente
    }
    set novoremetente (novoremetente){
        return this._remetente = novoremetente
    }

    get novodestinatario (){
        return this._destinatario
    }
    set novodestinatario (novodestinatario){
        return this._destinatario = novodestinatario
    }
}

const Object = new compra ('12345', 'Recife', 'São Paulo')
console.log(Object._codigo)
console.log(Object._remetente)
console.log(Object._destinatario)