const AuthController = require('../controllers/authController')

module.exports = app => {
  app.post('/register', AuthController.register)
  app.post('/login', AuthController.login)
  app.get('/user/:userId', AuthController.show)
}
