function divisao (num1, num2){
    try{
        return num1/num2
    }catch if (num2 == '0'){
        console.log ('Valor invalido para divisão!')
    }
    console.log ('FIM')

}

console.log divisao ('10', '0')