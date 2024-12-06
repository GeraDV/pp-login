const Joi = require('joi')

const nombre = Joi.string().min(3).max(255).messages({
  "string.base":"El nombre debe ser una cadena de texto",
  "string.min":"El nombre debe tener al menos {#limit} caracteres",
  "string.max":"El nombre no debe tener más de {#limit} caracteres",
  "any.required":"El nombre es obligatorio",
})

const nombreObligatorio = nombre.required().messages({
  "any.required":"El nombre es obligatorio"
})

const emailObligatorio = Joi.string().email().required().messages({
  "string.base":"El correo debe ser una cadena de texto",
  "string.email":"El correo debe tener un formato válido",
  "any.required":"El correo es obligatorio",
})

const password = Joi.string().min(6).max(255).messages({
  "string.base":"La contraseña debe ser una cadena de texto",
  "string.min":"La contraseña debe tener al menos {#limit} caracteres",  
})

const passwordObligatorio = password.required().messages({
  "any.required":"La contraseña es obligatoria"
})

const usuarioSchema = Joi.object({
  nombre: nombreObligatorio, 
  email: emailObligatorio, 
  password: passwordObligatorio
})

const loginSchema = Joi.object({
  email: emailObligatorio, 
  password: passwordObligatorio
})

const actualizarUsuarioSchema = Joi.object({
  nombre,
  password
}).or('nombre', 'password')

module.exports = {usuarioSchema, loginSchema, actualizarUsuarioSchema}