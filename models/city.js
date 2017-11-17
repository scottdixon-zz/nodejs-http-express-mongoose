const { mongoose, db, Schema } = require('../db')
const citySchema = Schema({name: String})
city = db.model('City', citySchema)

module.exports = city
