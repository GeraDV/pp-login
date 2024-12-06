const validarRol = (rolesPermitidos) => {
  return (req, res, next) => {
    try {
      const {usuario} = req
      if(!usuario){
        return res.status(401).json({error: "Usuario no autenticado"})
      }

      if(!rolesPermitidos.includes(usuario.rol)){
        return res.status(403).json({error: "Acceso denegado"})
      }

      next()

    } catch (error) {
      res.status(500).json({error: "Error interno del servidor"})
    }
  }
}

module.exports = validarRol