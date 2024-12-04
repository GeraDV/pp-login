const {Router} = require('express')
const usuarioRoutes = require('./usuarioLogin.routes')

const routes = Router()

routes.use(usuarioRoutes)

module.exports = routes