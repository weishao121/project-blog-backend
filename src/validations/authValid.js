const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(10).required(),
      email: Joi.string().email(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })

    const { error } = schema.validate(req.body)

    if (error) {
      switch(error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'Username must be alphanum, min 3, max 10 please.'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'Please provide an email.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be a-z A-Z 0-9 min3 max30.'
          })
          break
        default:
          res.status(400).send({
            error: 'Some error happened.'
          })
      }
    } else {
      next()
    }
  }
}