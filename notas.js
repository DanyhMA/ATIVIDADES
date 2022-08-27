function situacao (){
    let n1=parseFloat(prompt('Digite sua primeira nota: '))
    let n2=parseFloat(prompt('Digite sua segunda nota: '))
    let n3=parseFloat(prompt('Digite sua terceira nota: '))
    
    m=(n1+n2+n3)/3

    let situacao = (m>=7) ? 'APROVADO' : 'REPROVADO'
    alert(situacao)
}

function restante (){
    let n1=parseFloat(prompt ('Digite nota 1: '))
    let n2=parseFloat(prompt ('Digite a nota 2: '))
    
    m=(7*3)-n1-n2
    
    alert('Você precisa de ' + m +' para ser aprovado.')
}   

situacao()
restante()