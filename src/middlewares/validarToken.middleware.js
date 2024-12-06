const jwt = require('jsonwebtoken')
require('dotenv').config()

const validarToken = () => {
  return (req, res, next) => {
    const auth = req.headers.authorization
    if (!auth) {
      return res.status(400).json({ error: "La solicitud requiere de autenticación" })
    }
    const token = auth.split(" ")[1]

    try {
      const decoded = jwt.verify(token, process.env.JWT_CLAVE)
      req.usuario = decoded
    } catch (error) {
      if(error.name === "TokenExpiredError"){
        return res.status(401).json({error: "La sesión a expirado"})
      }
      return res.status(401).json({ error: "Token inválido" })
    }

    next()
  }
}

module.exports = validarToken