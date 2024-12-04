const Joi = require('joi')

const usuarioSchema = Joi.object({
  nombre: Joi.string().required().min(3).max(255).messages({
    "string.base":"El nombre debe ser una cadena de texto",
    "string.min":"El nombre debe tener al menos {#limit} caracteres",
    "string.max":"El nombre no debe tener más de {#limit} caracteres",
    "any.required":"El nombre es obligatorio",
  }),
  email: Joi.string().email().required().messages({
    "string.base":"El correo debe ser una cadena de texto",
    "string.email":"El correo debe tener un formato válido",
    "any.required":"El correo es obligatorio",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.base":"La contraseña debe ser una cadena de texto",
    "string.min":"La contraseña debe tener al menos {#limit} caracteres",
    "any.required":"La contraseña es obligatoria",
  })
})

module.exports = usuarioSchema