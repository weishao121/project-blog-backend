const AuthController = require('../controllers/authController')
const AuthValid = require('../validations/authValid')

module.exports = app => {
  app.post('/register', AuthValid.register, AuthController.register)
  app.post('/login', AuthController.login)
  app.get('/user/:userId', AuthController.show)
  app.put('/user/:userId', AuthController.put)
}
