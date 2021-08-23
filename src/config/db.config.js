module.exports = {
  database: process.env.DATABASE || 'ProjectBlog',
  user: process.env.USER || 'user',
  password: process.env.PASSWORD || 'password',
  options: {
    host: process.env.HOST || 'localhost',
    dialect: process.env.DIALECT || 'sqlite'
  }
}
