const {DataTypes} = require('sequelize')
const sequelize  = require('../conexao')

const Tarefa = sequelize.define('Tarefa', {
    Tarefa: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
    },
    Horario: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
    }
})

module.exports = Tarefa