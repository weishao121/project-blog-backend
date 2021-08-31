const BlogsController = require('../controllers/blogsController')
const BlogValid = require('../validations/blogValid')

module.exports = app => {
  app.get('/', BlogsController.index)
  app.get('/blog/:blogId', BlogsController.show)
  app.put('/blog/:blogId', BlogsController.put)
  app.delete('/blog/:blogId', BlogsController.delete)
  app.post('/blog/new', BlogValid.postBlog, BlogsController.post)
  app.post('/blog', BlogsController.list)
  app.get('/category/:category', BlogsController.listCate)
}
