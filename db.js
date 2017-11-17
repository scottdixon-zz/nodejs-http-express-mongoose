const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://localhost/students');
const Schema = mongoose.Schema
mongoose.Promise = Promise

module.exports = { mongoose, db, Schema }
