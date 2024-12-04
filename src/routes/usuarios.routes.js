const {Router} = require('express')
const usuarioController = require('../controllers/usuarios.controllers')

const routes = Router()

routes.get('/usuarios', usuarioController.getAllUsuarios)
routes.post('/usuarios', usuarioController.agregarUsuario)


module.exports = routes