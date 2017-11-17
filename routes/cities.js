const express = require('express')
const router = express.Router()
const city = require('../models/city')

router.get('/', (req, res) => {
  city.find().then((cities) => {
    res.render('cities', { cities })
  }).catch((err) => {
    next(err)
  })
})

router.post('/', (req, res) => {
  city.create({ name: req.body.city }).then(() => {
    res.redirect('/cities')
  }).catch((err) => {
    next(err)
  })
})

module.exports = router;
