const BlogsController = require('../controllers/blogsController')
module.exports = app => {
  app.get('/', BlogsController.index)
  app.get('/blog/:blogId', BlogsController.show)
  app.post('/blog/new', BlogsController.post)
  app.post('/blog', BlogsController.list)
  app.get('/category/:category', BlogsController.listCate)
}
