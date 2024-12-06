const Usuario = require('../models/usuarios.model')
const bcrypt = require('bcrypt')

const crearUsuarios = async () => {
  await Usuario.deleteMany({})
  await Usuario.insertMany([
    await crearUsuario("Admin", "admin@api.com", "x6Qyl7ROkpTeyaF", 'admin'),
    await crearUsuario("Joven Bruce", "bruce@gmail.com", "jkljkljkl"),
    await crearUsuario("Doncella", "ladoncella@hotmail.com", "diosesamor"),
  ])
}

const crearUsuario = async (nombre, email, pass, rol='user') => {
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(pass, salt)
  return {nombre, email, password:hashPassword, rol}
}

module.exports = {crearUsuarios}