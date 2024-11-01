const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/usuarios/teste', (req, res) => {
    res.json([{
        nome: 'Bruno',
        acesso: 10
    }])
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

// usar no terminal 'node server.js' para consumir