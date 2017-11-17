const express = require('express')
const app = express()
const port = 3000

let students = ['Scott', 'Simon'];

app.get('/students', function (req, res) {
  res.send(students)
})

app.use(function(req, res){
  console.log('404')
  res.sendStatus(404);
})

app.listen(port)
