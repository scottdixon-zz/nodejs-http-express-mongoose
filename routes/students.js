const express = require('express')
const router = express.Router()
const student = require('../models/student')
const city = require('../models/city')

router.get('/', (req, res) => {
  city.find().then((cities) => {
    student.find().populate('city').then((students) => {
      res.render('students', { students, cities })
    }).catch((err) => {
      next(err)
    })
  })
})

router.post('/', (req, res) => {
  student.create({ 
    name: req.body.student,
    city: req.body.city
  }).then(() => {
    res.redirect('/students')
  }).catch((err) => {
    next(err)
  })
})

module.exports = router;
