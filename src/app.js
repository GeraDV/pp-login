const express = require('express')
const {connectDB} = require('./database/mongo.db')
const semillaUsuarios = require('./seeders/usuarios.seed')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3001
app.listen(PORT,async () => {
  await connectDB()
  //await semillaUsuarios.crearUsuarios()
  console.log(`Aplicación corriendo en el puerto ${PORT}`)
})