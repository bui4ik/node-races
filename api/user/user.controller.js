const Service = require('./user.service')
const userSchema = require('../validation/validation')
const Joi = require('joi')
const {
  createNewUser,
  editUserById,
  getAllUsers,
  getUserById,
  deleteUserById,
  getAllUsersWithRaces,
  getAllUsersWithLeagues,
} = new Service()

class UserController {
  async getAllUsers(req, res) {
    try {
      res.send(await getAllUsers())
    } catch (e) {
      res.status(404).send(e.message)
    }
  }

  async getUserById(req, res) {
    const { userId } = req.params
    try {
      res.send(await getUserById(userId))
    } catch (e) {
      res.status(404).send(e.message)
    }
  }

  async createNewUser(req, res) {
    const { error } = Joi.validate(req.body, userSchema)
    if (error) {
      res.status(400).send(error.details[0].message)
      return
    }
    try {
      res.send(await createNewUser(req.body))
    } catch (e) {
      res.status(404).send(e.message)
    }
  }

  async editUserById(req, res) {
    const { error } = Joi.validate(req.body, userSchema)
    if (error) {
      res.status(400).send(error.details[0].message)
      return
    }
    const { userId } = req.params
    try {
      res.send(await editUserById(userId, req.body))
    } catch (e) {
      res.status(404).send(e.message)
    }
  }

  async deleteUserById(req, res) {
    const { userId } = req.params
    try {
      res.send(await deleteUserById(userId))
    } catch (e) {
      res.status(404).send(e.message)
    }
  }

  async getAllUsersWithRaces(req, res) {
    try {
      res.send(await getAllUsersWithRaces())
    } catch (e) {
      res.status(404).send(e.message)
    }
  }

  async getAllUsersWithLeagues(req, res) {
    try {
      res.send(await getAllUsersWithLeagues())
    } catch (e) {
      res.status(404).send(e.message)
    }
  }
}

module.exports = UserController
