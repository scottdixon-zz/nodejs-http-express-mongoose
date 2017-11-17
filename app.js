const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const student = require('./models/student')

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.get('/students', (req, res) => {
  student.find().then((students) => {
    res.render('students', { students })
  }).catch((err) => {
    next(err)
  })
})

app.post('/students', (req, res) => {
  student.create({name: req.body.student}).then(() => {
    res.redirect('/students');
  }).catch((err) => {
    next(err)
  })
})

app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(port)
