const Sequelize = require('sequelize')

const connection = new Sequelize("andre", "root", "898989", {
    host: 'localhost',
    dialect: 'mysql'
});

connection.authenticate()
    .then(function () {
        console.log('Conexão com o banco de dados estabelecida com sucesso!')

    }).catch(function () {
        console.log("ERRO: Conexão com o banco de dados não foi estabelecida com sucesso!")
    })

module.exports = connection; 