const {Router} = require('express')
const usuarioController = require('../controllers/usuarios.controllers')
const validarEsquema = require('../middlewares/validarSchema.middleware')
const {usuarioSchema, actualizarUsuarioSchema} = require('../schemas/usuarios.schema')
const {validarRol, validarToken, validarPermiso, validarIdUsuarios: validarIdUsuario} = require('../middlewares')

const routes = Router()

routes.get('/usuarios', validarToken(), validarRol(['admin']), usuarioController.getAllUsuarios)
routes.post('/usuarios', validarEsquema(usuarioSchema), usuarioController.agregarUsuario)
routes.put('/usuarios/:id', 
  validarIdUsuario,
  validarToken(), 
  validarRol(['admin']), 
  validarEsquema(usuarioSchema),
  usuarioController.modificarUsuario
)
routes.patch('/usuarios/:id',
  validarToken(),
  validarIdUsuario,
  validarPermiso(),
  validarEsquema(actualizarUsuarioSchema),
  usuarioController.actualizarUsuario
)
routes.delete('/usuarios/:id',
  validarToken(),
  validarIdUsuario,
  validarPermiso(),
  usuarioController.eliminarUsuario
)

module.exports = routes