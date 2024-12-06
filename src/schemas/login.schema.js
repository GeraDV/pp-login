const Joi = require('joi')

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.bas":"El correo debe ser una cadena de texto",
    "string.email":"El correo debe tener un formato válido",
    "any.required":"El correo es obligatorio",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.base":"La contraseña debe ser una cadena de texto",
    "string.min":"La contraseña debe tener al menos {#limit} caracteres",
    "any.required":"La contraseña es obligatoria",
  })
})


module.exports = loginSchema
