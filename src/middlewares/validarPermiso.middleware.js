const validarPermiso = () => {
  return (req, res, next) => {
    try {
      const {usuario} = req
      if(!usuario || !usuario.rol){
        return res.status(401).json({error: "Usuario no autenticado"})
      }

      if(usuario.rol === 'admin' || usuario.id === req.params.id){
        return next()
      }

      return res.status(403).json({error: "Acceso denegado"})

    } catch (error) {
      res.status(500).json({error: "Error interno del servidor"})
    }
  }
}

module.exports = validarPermiso