module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define('blog', {
    author: Sequelize.STRING,
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    mainTag: Sequelize.STRING,
    content: Sequelize.STRING
  })
  return Blog
}
