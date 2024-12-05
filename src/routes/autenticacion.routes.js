const {Router} = require('express')
const authController = require('../controllers/autenticacion.controllers')

const routes = Router()

routes.post('/login', authController.login)


module.exports = routes