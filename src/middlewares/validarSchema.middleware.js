const schemaValidator = (schema) => {
  return (req, res, next) => {
    const {error} = schema.validate(req.body, {abortEarly: false})
    if(error){
      const mensajes = error.details.map((detalle) => detalle.message)
      return res.status(400).json({error: mensajes})
    }
    next()
  }
}

module.exports = schemaValidator