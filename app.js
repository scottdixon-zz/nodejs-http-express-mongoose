const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const students = require('./routes/students');
const cities = require('./routes/cities');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.use('/students', students)
app.use('/cities', cities)

app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(port)
