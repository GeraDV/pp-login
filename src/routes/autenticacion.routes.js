const {Router} = require('express')
const authController = require('../controllers/autenticacion.controllers')
const {loginSchema} = require('../schemas/usuarios.schema')
const schemaValidator = require('../middlewares/validarSchema.middleware')

const routes = Router()

routes.post('/login', schemaValidator(loginSchema), authController.login)


module.exports = routes