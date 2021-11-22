const {Sequelize} = require('sequelize')

const sequelize = new Sequelize ({
    dialect:'sqlite',
    storage: 'dadosB.db'
})

sequelize.sync()

module.exports = sequelize