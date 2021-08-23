// const bcrypt = require('bcrypt')

// function hashPassword (user, options) {
//   const SALT_FACTOR = 8
//   if (!user.changed('password')) {
//     return
//   }
//   return bcrypt.getSaltAsync(SALT_FACTOR).then(salt => bcrypt.hashAsync(user.password, salt, null)).then(hash => { user.setDataValue('password', hash) })
// }

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    }
  })
  // User.prototype.comparePassword = function (password) {
  //   return bcrypt.compareAsync(password, this.password)
  // }
  return User
}
