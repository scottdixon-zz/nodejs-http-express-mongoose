const { mongoose, db, schema } = require('../db')
const studentSchema = schema({name: String})
student = db.model('Student', studentSchema)

module.exports = student
