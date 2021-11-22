const express = require('express')
const cors = require('cors') //permite comunicação de un site com outro de forma livre, independente do método da chamada (GET, POST, PUT ou DELETE) contanto que o domínio de destino tenha especificado esse tipo de comunicação.

const Tarefas = require('./rotas/rotas')
const sequelize = require('./conexao')
const Tarefa = require('./models/tarefa')

Tarefa.sync()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/tarefas', Tarefas)

app.listen(8000, () => console.log('Funcinando'))