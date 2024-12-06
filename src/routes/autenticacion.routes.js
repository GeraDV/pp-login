const {Router} = require('express')
const authController = require('../controllers/autenticacion.controllers')
const {loginSchema} = require('../schemas')
const schemaValidator = require('../middlewares/validateSchema.middleware')

const routes = Router()

routes.post('/login', schemaValidator(loginSchema), authController.login)


module.exports = routes