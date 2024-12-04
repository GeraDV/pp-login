const Usuario = require('../schemas/usuario.schema')

const crearUsuarios = async () => {
  await Usuario.deleteMany({})
  await Usuario.insertMany([
    {nombre:"Joven Bruce", email:"bruce@gmail.com", password:"jkljkljkl"},
    {nombre:"Doncella", email:"ladoncella@hotmail.com", password:"diosesamor"}
  ])

}

module.exports = {crearUsuarios}