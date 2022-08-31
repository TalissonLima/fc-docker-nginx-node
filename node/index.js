const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)
connection.query('CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))')
connection.query('INSERT INTO people(name) values("Wesley")')
connection.query('INSERT INTO people(name) values("Tálisson")')
connection.query('INSERT INTO people(name) values("José")')
connection.query('INSERT INTO people(name) values("Maria")')
connection.query('INSERT INTO people(name) values("João")')
connection.end()

app.get('/', (req, res) => {
    const conn = mysql.createConnection(config)
    conn.query('SELECT * FROM people', function (err, result, fields) {
        let resultado = '</p><p><h1>Full Cycle Rocks!</h1></p><p></p>';

        result.forEach(p => resultado += '<p>- ' + p.name + '.</p>');

        resultado += '</p>';

        res.send(resultado)
    })
    conn.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})