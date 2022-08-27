function calculadora(){
    let num1=parseFloat(prompt('Digite um número: '))
    let op=prompt('Digite o operador: ')
    let num2=parseFloat(prompt('Digite outro número: '))
    console.log(num1, op, num2)

    if (op=='+'){
        let resultado=num1+num2
        console.log('O resultado da soma é: ' + resultado)
    }
    else if (op=='-'){
        let resultado=num1-num2
        console.log('O resultado da subtração é: ' + resultado)
    } 
    else if (op=='/') {
        let resultado=num1/num2
        let resto=num1%num2
        console.log('O resultado da divisão é: ' + resultado, 'e seu resto é: ' + resto)
    } 
    else if (op=='*'){
        let resultado=num1*num2
        console.log('O resultado da subtração é: ' + resultado)
    }

}

calculadora()