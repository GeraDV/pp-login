const {Router} = require('express')
const usuarioController = require('../controllers/usuarios.controllers')
const validarEsquema = require('../middlewares/validarSchema.middleware')
const {usuarioSchema, actualizarUsuarioSchema} = require('../schemas/usuarios.schema')
const {validarRol, validarToken, validarPermiso, validarIdUsuarios} = require('../middlewares')

const routes = Router()

routes.get('/usuarios', validarToken(), validarRol(['admin']), usuarioController.getAllUsuarios)
routes.post('/usuarios', validarEsquema(usuarioSchema), usuarioController.agregarUsuario)
routes.put('/usuarios/:id', 
  validarToken(), 
  validarRol(['admin']), 
  validarEsquema(usuarioSchema),
  validarIdUsuarios,
  usuarioController.modificarUsuario
)
routes.patch('/usuarios/:id',
  validarToken(),
  validarPermiso(),
  validarEsquema(actualizarUsuarioSchema),
  validarIdUsuarios,
  usuarioController.actualizarUsuario
)

module.exports = routes