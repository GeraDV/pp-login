const {mongoose} = require('../database/mongo.db')
const {Schema} = require('mongoose')

const usuarioSchema = new mongoose.Schema({
  nombre: {type: Schema.Types.String, required: true},
  email: {type: Schema.Types.String, required: true, unique: true},
  password: {type: Schema.Types.String, required: true}
})

const Usuario = mongoose.model('Usuario', usuarioSchema, 'Usuarios')

module.exports = Usuario