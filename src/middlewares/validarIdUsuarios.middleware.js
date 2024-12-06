const Usuario = require('../models/usuarios.model')
const {mongoose} = require('../database/mongo.db')

const validarIdUsuarios = async (req, res, next) => {
  const id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "El id proporcionado no tiene un formato válido"})
  }

  const usuario = await Usuario.findById(id)
  if(!usuario){
    return res.status(404).json({error: "Usuario no encontrado"})
  }

  next()
}


module.exports = validarIdUsuarios