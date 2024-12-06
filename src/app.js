const express = require('express')
const {connectDB} = require('./database/mongo.db')
const routes = require('./routes')
const semillaUsuarios = require('./seeders/usuarios.seed')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3001
app.listen(PORT,async () => {
  await connectDB()
  //await semillaUsuarios.crearUsuarios()
  console.log(`Aplicación corriendo en el puerto ${PORT}`)
})