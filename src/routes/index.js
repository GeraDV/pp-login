const {Router} = require('express')
const usuarioRoutes = require('./usuarios.routes')
const autenticacionRoutes = require('./autenticacion.routes')

const routes = Router()

routes.use(usuarioRoutes)
routes.use(autenticacionRoutes)

module.exports = routes