const mongoose = require('mongoose')
const {MONGO_URL} = require('./config.db')

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("Conectado a la base de datos de mongo")
  } catch (error) {
    console.error("Error al conectarse a la base de datos", error)
  }
}

module.exports = {mongoose, connectDB}