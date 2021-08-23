const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  dbConfig.options
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.userModel = require('./userModel')(sequelize, Sequelize)
db.blogModel = require('./blogModel')(sequelize, Sequelize)

module.exports = db
