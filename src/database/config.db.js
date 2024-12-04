require('dotenv').config()

const usuario = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST || "localhost:27017"
const name = process.env.DB_NAME
const authSource = process.env.DB_AUTH_SOURCE || "admin"

if (!usuario || !password || !name){
  throw new Error("Faltan variables de entorno requeridas: DB_USER, DB_PASSWORD, DB_NAME")
}


const MONGO_URL = process.env.MONGO_URL ?? `mongodb:\\${usuario}:${password}@${host}/${name}?authSource=${authSource}`
module.exports = { MONGO_URL }