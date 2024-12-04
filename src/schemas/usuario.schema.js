const {mongoose} = require('../database/mongo.db')
const {Schema} = require('mongoose')

const usuarioSchema = new mongoose.Schema({
  nombre: {type: Schema.Types.String, required: true},
  email: {type: Schema.Types.String, required: true, unique: true},
  password: {type: Schema.Types.String, required: true}
})

usuarioSchema.set("toJSON", {
  transform: (_, ret) => {
    ret.id = ret._id.toString()
    delete ret.__v
    delete ret._id
  }
})

const Usuario = mongoose.model('Usuario', usuarioSchema, 'Usuarios')

module.exports = Usuario