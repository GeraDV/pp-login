const {mongoose} = require('../database/mongo.db')
const {Schema} = require('mongoose')

const usuarioSchema = new mongoose.Schema({
  nombre: {type: Schema.Types.String, required: [true, "El nombre es requerido"]},
  email: {type: Schema.Types.String, required: [true, "El correo es requerido"], unique: true},
  password: {type: Schema.Types.String, required: [true, "Se requiere contraseña"]},
  rol: {type: Schema.Types.String, default:'user'}
})

usuarioSchema.path('email').validate(async (correo) => {
  const count = await mongoose.models.Usuario.countDocuments({email: correo})
  return !count
}, "Ya existe un usuario con ese correo electrónico")

usuarioSchema.set("toJSON", {
  transform: (_, ret) => {
    ret.id = ret._id.toString()
    delete ret.__v
    delete ret._id
  }
})


const Usuario = mongoose.model('Usuario', usuarioSchema, 'Usuarios')

module.exports = Usuario