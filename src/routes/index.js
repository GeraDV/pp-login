const {Router} = require('express')
const usuarioRoutes = require('./usuarios.routes')

const routes = Router()

routes.use(usuarioRoutes)

module.exports = routes