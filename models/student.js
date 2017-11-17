const { mongoose, db, Schema } = require('../db')
const studentSchema = Schema({
  name: String,
  city: { type: Schema.Types.ObjectId, ref: 'City' }
})

student = db.model('Student', studentSchema)

module.exports = student
