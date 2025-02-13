const Usuario = require('../models/usuarios.model')
const bcrypt = require('bcrypt')

const usuarioController = {}

usuarioController.getAllUsuarios = async (_, res) => {
  try {
    const usuarios = await Usuario.find({})
    res.status(200).json(usuarios)    
  } catch (error) {
    res.status(500).json({mensaje: 'Hubo un problema al obtener los usuarios', error})
  }
}

usuarioController.getUsuarioById = async (req, res) => {
  const _id = req.params.id
  try {
    const usuario = await Usuario.findById(_id)
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({error: "Error en el servidor"})
  }
}

usuarioController.agregarUsuario = async (req, res) => {
  const {nombre, email, password} = req.body
  try {
    const hashPassword = await hashearPassword(password)
    const usuario = await Usuario.create({nombre, email, password:hashPassword})
    res.status(201).json(usuario)    
  } catch (error) {
    res.status(400).json(error.message)
  }
}

usuarioController.modificarUsuario = async (req, res) => {
  try {
    const _id = req.params.id
    const {email, nombre, password} = req.body
    const hashPassword = await hashearPassword(password)
    const usuarioModificado = await Usuario.findOneAndUpdate({_id},{nombre, email, password: hashPassword},{new:true})
    res.status(200).json(usuarioModificado)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

usuarioController.actualizarUsuario = async (req, res) => {
  try {
    const _id = req.params.id
    const {nombre, password} = req.body
    const updates = {}
    if(nombre){
      updates.nombre = nombre
    }
    if(password){
      updates.password = await hashearPassword(password)
    }

    const usuarioActualizado = await Usuario.findOneAndUpdate({_id}, updates, {new: true})
    res.status(200).json(usuarioActualizado)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

usuarioController.eliminarUsuario = async (req, res) => {
  const _id = req.params.id
  try {
    await Usuario.findByIdAndDelete(_id)
    res.status(200).json({mensaje: "Usuario eliminado con éxito"})
  } catch (error) {
    res.status(500).json({error: "Algo salió mal en el servidor"})
  }  
}

const hashearPassword = async (password) => {  
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}


module.exports = usuarioController