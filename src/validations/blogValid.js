const Joi = require('joi')

module.exports = {
  postBlog (req, res, next) {
    const schema = Joi.object({
      author: Joi.string().alphanum().min(3).max(10).required(),
      title: Joi.string().min(3).max(10).required(),
      description: Joi.string().min(10).max(30).required(),
      mainTag: Joi.string().min(3).max(6).required(),
      content: Joi.string().min(30).required()
    })

    const { error } = schema.validate(req.body)

    if (error) {
      switch(error.details[0].context.key) {
        case 'author':
          res.status(400).send({
            error: 'You must first log in before posting a blog.'
          })
          break
        case 'title':
          res.status(400).send({
            error: 'Title must be in the range: min 3, max 10.'
          })
          break
        case 'description':
          res.status(400).send({
            error: 'Description must be in the range: min 10 max 30'
          })
          break
        case 'mainTag':
          res.status(400).send({
            error: 'MainTag must be in the range: min 3 max 6'
          })
          break
        case 'content':
          res.status(400).send({
            error: 'Content must be in the range: max 30'
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