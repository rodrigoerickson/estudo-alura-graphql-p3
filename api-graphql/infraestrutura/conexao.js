const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'agenda-petshop',
  multipleStatements: true
})

module.exports = conexao
