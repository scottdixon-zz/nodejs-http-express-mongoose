const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = mongoose.createConnection('mongodb://localhost/students');
const Schema = mongoose.Schema;
const studentSchema = Schema({name: String});
mongoose.Promise = Promise;

student = db.model('Student', studentSchema);

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')

app.get('/students', function (req, res) {
  student.find().then(function(students) {
    res.render('students', { students: students })
  }).catch(function(err){
    next(err)
  })
})

app.post('/students', function (req, res) {
  student.create({name: req.body.student}).then(function(){
    res.redirect('/students');
  }).catch(function(err){
    next(err);
  })
})

app.use(function(req, res){
  console.log('404')
  res.sendStatus(404);
})

app.listen(port)
