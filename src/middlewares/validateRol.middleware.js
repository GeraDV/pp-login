const jwt = require('jsonwebtoken')
require('dotenv').config()

const validarRol = (rolesPermitidos) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const dataDecode = jwt.decode(token, process.env.JWT_CLAVE)

      if(!rolesPermitidos.includes(dataDecode.rol)){
        return res.status(403).json({error: "Acceso denegado"})
      }
      req.id = dataDecode.id
      req.rol = dataDecode.rol
      next()
    } catch (error) {
      
    }
  }
}

module.exports = validarRol