const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const students = require('./routes/students');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.use('/students', students)

app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(port)
