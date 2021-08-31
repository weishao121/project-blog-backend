const db = require('../models')
const User = db.userModel
const authConfig = require('../config/auth.config')
const jwt = require('jsonwebtoken')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, authConfig.auth.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      // console.log(req.body)
      const user = await User.create(req.body)
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(400).send({
        error: 'Username or mail account is already in use.'
      })
    }
  },
  async login (req, res) {
    // console.log(req.body)
    try {
      const { username, password } = req.body
      const user = await User.findOne({
        where: {
          username: username
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Incorrect username'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      // console.log(isPasswordValid)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Incorrect password'
        })
      }
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(500).send({
        error: 'Internal server error, not your fault, user'
      })
    }
  },
  async show (req, res) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.send(user)
    } catch (error) {
      res.status(400).send({
        error: 'User does not exist'
      })
    }
  },
  async put (req, res) {
    console.log(req.params)
    try {
      const user = await User.update(req.body, {
        where: {
          id: req.params.userId
        }
      })
      res.send(this.body)
    } catch (error) {
      res.status(400).send({
        error: 'Unable to edit your details'
      })
    }
  }

}
