const porta = 3000

const express = require ('express')
const app = express()

app.get('/user', (req, rest, next) =>{
    rest.send({
        login1: {
            nome:'Dona Araujo',
            email: 'donaaraujo@gmail.com'
        },
        login2 :{
            nome: 'Menina Araujo',
            email: 'meninaaraujo@gmail.com'
        }
    })
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})