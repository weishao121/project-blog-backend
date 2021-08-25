const bcrypt = require('bcrypt')
const saltRounds = 10

async function hashPassword (user, options) {
  if (!user.changed('password')) {
    return
  }
  // console.log('Hash here using salt rounds: ', saltRounds)
  return await bcrypt.hash(user.password, saltRounds)
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    }
  }, {
    hooks: {
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }
  return User
}
