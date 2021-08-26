const BlogsController = require('../controllers/blogsController')
module.exports = app => {
  app.get('/', BlogsController.index)
  app.get('/blog/:blogId', BlogsController.show)
  app.put('/blog/:blogId', BlogsController.put)
  app.delete('/blog/:blogId', BlogsController.delete)
  app.post('/blog/new', BlogsController.post)
  app.post('/blog', BlogsController.list)
  app.get('/category/:category', BlogsController.listCate)
}
