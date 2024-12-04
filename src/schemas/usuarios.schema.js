const Joi = require('joi')

const usuarioSchema = Joi.object({
  nombre: Joi.string().required().min(2).max(255).messages({
    "string.base":"El nombre debe ser una cadena de texto",
    "any.required":"El nombre es obligatorio",
    "any.min":"El nombre debe tener al menos {#limit} caracteres",
    "any.max":"El nombre no debe tener más de {#limit] caracteres"
  }),
  email: Joi.string().email().required().messages({
    "string.base":"El correo debe ser una cadena de texto",
    "string.email":"El correo debe tener un formato válido",
    "any.required":"El correo es obligatorio"
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.base":"La contraseña debe ser una cadena de texto",
    "any.required":"La contraseña es obligatoria",
    "any.min":"La contraseña debe tener al menos {#limit] caracteres"
  })
})

module.exports = usuarioSchema