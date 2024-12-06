const {Router} = require('express')
const usuarioController = require('../controllers/usuarios.controllers')
const schemaValidator = require('../middlewares/validateSchema.middleware')
const {usuarioSchema} = require('../schemas')
const rolValidator = require('../middlewares/validateRol.middleware')
const validarToken = require('../middlewares/validateToken.middleware')

const routes = Router()

routes.get('/usuarios', validarToken(), rolValidator(['admin']), usuarioController.getAllUsuarios)
routes.post('/usuarios', schemaValidator(usuarioSchema), usuarioController.agregarUsuario)


module.exports = routes