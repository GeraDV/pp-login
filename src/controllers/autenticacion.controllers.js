const Usuario = require('../models/usuarios.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const controller = {}

controller.login = async (req, res) => {
  const {email, password} = req.body
  try {
    const usuario = await Usuario.findOne({email})
    if(!usuario){
      return res.status(404).json({error: "El usuario no existe"})
    }

    const match = await bcrypt.compare(password, usuario.password)
    if(!match){
      return res.status(401).json({error: "Contraseña incorrecta"})
    }

    const token = jwt.sign({id: usuario._id, rol: usuario.rol}, process.env.JWT_CLAVE, {expiresIn: '6h'})
    return res.status(200).json({token})

  } catch (error) {
    return res.status(500).json({error: `Error en el servidor: ${error.message}`})
  }

}


module.exports = controller