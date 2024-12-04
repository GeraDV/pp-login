const express = require('express')
const {connectDB} = require('./database/mongo.db')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3001
app.listen(PORT,async () => {
  await connectDB()
  console.log(`Aplicación corriendo en el puerto ${PORT}`)
})