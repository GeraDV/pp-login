const Usuario = require('../schemas/usuario.schema')
const usuarioController = {}

usuarioController.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({})
    res.status(200).json(usuarios)    
  } catch (error) {
    res.status(500).json({mensaje: 'Hubo un problema al obtener los usuarios', error})
  }
}

usuarioController.agregarUsuario = async (req, res) => {
  const {nombre, email, password} = req.body
  try {
    const usuario = await Usuario.create({nombre, email, password})
    res.status(201).json(usuario)    
  } catch (error) {
    res.status(400).json({mensaje: "Error al crear el usuario", error})
  }
}


module.exports = usuarioController