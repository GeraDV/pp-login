const validarPermiso = require('./validarPermiso.middleware')
const validarRol = require('./validarRol.middleware')
const validarSchema = require('./validarSchema.middleware')
const validarToken = require('./validarToken.middleware')
const validarIdUsuarios = require('./validarIdUsuarios.middleware')

module.exports = {validarPermiso, validarRol, validarSchema, validarToken, validarIdUsuarios}