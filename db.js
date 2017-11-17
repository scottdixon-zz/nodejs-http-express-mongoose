const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://localhost/students');
const schema = mongoose.Schema
mongoose.Promise = Promise

module.exports = { mongoose, db, schema }
