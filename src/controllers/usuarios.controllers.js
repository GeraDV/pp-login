const Usuario = require('../models/usuarios.model')
const bcrypt = require('bcrypt')

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
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const usuario = await Usuario.create({nombre, email, password:hashPassword})
    res.status(201).json(usuario)    
  } catch (error) {
    res.status(400).json(error.message)
  }
}


module.exports = usuarioController