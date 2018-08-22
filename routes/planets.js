let router = require('express').Router()
let Planets = require('../models/planet')

//get all method
router.get('/', (req, res, next) => {
  Planets.find({})
    .then(planets => {
      return res.send(planets)
    })
    .catch(err => {
      return next(err)
    })
})