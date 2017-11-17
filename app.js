const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

let students = ['Scott', 'Simon'];

app.use(bodyParser.urlencoded())

app.set('view engine', 'pug')

app.get('/students', function (req, res) {
  res.render('students', { students: students })
})

app.post('/students', function (req, res) {
  let student = req.body.student;
  students.push(student);
  res.redirect('/students');
})

app.use(function(req, res){
  console.log('404')
  res.sendStatus(404);
})

app.listen(port)
