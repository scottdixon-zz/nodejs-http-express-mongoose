const express = require('express')
const router = express.Router()
const student = require('../models/student')

router.get('/', (req, res) => {
  student.find().then((students) => {
    res.render('students', { students })
  }).catch((err) => {
    next(err)
  })
})

router.post('/', (req, res) => {
  student.create({ name: req.body.student }).then(() => {
    res.redirect('/students')
  }).catch((err) => {
    next(err)
  })
})

module.exports = router;
