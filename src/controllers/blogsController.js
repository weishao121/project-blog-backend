const db = require('../models')
const Blog = db.blogModel

module.exports = {
  async index (req, res) {
    try {
      const blogs = await Blog.findAll({
        limit: 10
      })
      // res.send(blogs)
      const trending = await Blog.findAll({
        limit: 6
      })
      res.send({
        allBlogs: blogs,
        trendingBlogs: trending
      })
      // console.log(blogs)
    } catch (error) {
      res.status(400).send({
        error: 'Cannot fetch blogs'
      })
    }
  },
  async post (req, res) {
    try {
      console.log(req.body)
      const blog = await Blog.create(req.body)
      res.send(blog)
    } catch (error) {
      res.status(400).send({
        error: 'Cannot create blog.'
      })
    }
  },
  async show (req, res) {
    try {
      const blog = await Blog.findByPk(req.params.blogId)
      res.send(blog)
    } catch (error) {
      res.status(400).send({
        error: 'This one blog no longer exists'
      })
    }
  },
  async list (req, res) {
    try {
      // console.log(req.body.author)
      const blogs = await Blog.findAll({
        where: {
          author: req.body.author
        },
        limit: 10
      })
      res.send(blogs)
    } catch (error) {
      res.status(400).send({
        error: 'Cannot find any blogs from this user'
      })
    }
  },
  async listCate (req, res) {
    console.log(req.params)
    try {
      const blog = await Blog.findAll({
        where: {
          mainTag: req.params.category
        }
      })

      res.send(blog)
    } catch (error) {
      res.status(400).send({
        error: 'Cannot find blogs with that category'
      })
    }
  }
}
