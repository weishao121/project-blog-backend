const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    Message: 'Hello! You are at status page'
  })
})

require('./routes/userRoutes')(app)
require('./routes/blogRoutes')(app)

const db = require('./models')

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.')
})

app.listen(process.env.PORT || 8081)
