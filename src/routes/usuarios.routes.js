const {Router} = require('express')
const usuarioController = require('../controllers/usuarios.controllers')
const schemaValidator = require('../middlewares/validateSchema.middleware')
const usuarioSchema = require('../schemas/usuarios.schema')

const routes = Router()

routes.get('/usuarios', usuarioController.getAllUsuarios)
routes.post('/usuarios', schemaValidator(usuarioSchema),usuarioController.agregarUsuario)


module.exports = routes