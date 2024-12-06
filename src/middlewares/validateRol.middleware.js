const validarRol = (rolesPermitidos) => {
  return (req, res, next) => {
    try {
      const {usuario} = req
      if(!usuario){
        return res.status(401).json({error: "Usuario no utenticado"})
      }

      if(!rolesPermitidos.includes(usuario.rol)){
        return res.status(403).json({error: "Acceso denegado"})
      }

      next()
      
    } catch (error) {
      res.status(401).json({error: error.message})
    }
  }
}

module.exports = validarRol