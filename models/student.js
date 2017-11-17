const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://localhost/students');
const Schema = mongoose.Schema
const studentSchema = Schema({name: String})
mongoose.Promise = Promise

student = db.model('Student', studentSchema)

module.exports = student
