const { mongoose, db, Schema } = require('../db')
const studentSchema = Schema({name: String})
student = db.model('Student', studentSchema)

module.exports = student
