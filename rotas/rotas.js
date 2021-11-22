const express = require('express')
const sequelize = require('../conexao')
const router = express.Router()
const Tarefa = require('../models/tarefa')

//Criando tarefa
router.post('/', async (req, res) =>{
  if (req.body.Tarefa && req.body.Horario) {
      const tarefa = await Tarefa.create({
          id: 4,
          Tarefa: req.body.Tarefa,
          Horario: req.body.Horario
      })
      res.status(201).send(tarefa)
  } else {
       res.status(400).send("Tarefa não criado")
  }
})

//Mostra uma tarefa especifica
router.get('/:id', async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id)
  if(tarefa) {
      res.send(tarefa)
  }else{
      res.status(404).send("Tarefa não encontrada")
  }
})

//Encontrar todas as tarefas
router.get('/', async (req, res) => {
  const tarefa = await Tarefa.findAll()
  res.send(tarefa)
})

//Atualizando tarefa
router.put('/:id', async (req, res) => {
  if(req.params.id == '1' && req.body.Tarefa || req.body.Horario) {
    res.send({
           id: 4,
        Tarefa: req.body.Tarefa || 'Corrigindo erros da API',
        Horario: req.body.Horario || 'quinta todo o dia'
      })
  } else {
      res.status(404).send("Tarefa não atualizada")
  }
}) 

//Apagar tarefa
router.delete('/:id', async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id)
  if (tarefa) {
     await tarefa.destroy()
      res.send("Tarefa deletada com sucesso")
  } else {
      res.status(404).send("Tarefa não deletada")
  }
}) 

module.exports = router