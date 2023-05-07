const express = require('express')
const router = express.Router()
const friendSchema = require('../models/friendSchema.js')
// const enemySchema = require('../models/friendSchema.js')


// friend stuff
router.get('/friends', (req, res) => {
  friendSchema.find(req.params.id)
  .then(friends => {
    console.log("succesfully got entire db!")
    console.log(friends)
    res.json(friends)
  })
  .catch(err => {
    console.error(err)
  })
})

router.get('/', (req, res) => {
  friendSchema.findOne(req.query)
  .then(friends => {
    console.log("succesfully got entire db!")
    console.log(friends)
    res.json(friends)
  })
  .catch(err => {
    console.error(err)
  })
})

//Read/get by id
router.get('/:id', (req, res) => {
  friendSchema.findById(req.params.id)
  .then(friends => {
    console.log("succesfully got one!")
    console.log(friends)
    res.json(friends)
  })
  .catch(err => {
    console.error(err)
  })
})

//we will be using the '/add' to do a POST request
router.post('/add', (req, res) => {
friendSchema.create(req.body)
.then(friends => {
console.log(friends)
res.send(friends)
})
.catch(err => {
res.json(err)
})
})

// update
router.put('/update/:id', (req, res) => {
friendSchema.findByIdAndUpdate(req.params.id, req.body)
  .then(updated => {
    // returns the previously saved model
    res.send(updated)
  })
  .catch(err => {
    res.json(err)
  })
})

router.delete('/delete/:id', (req, res) => {
friendSchema.findByIdAndDelete(req.params.id)
.then(deleted => {
  res.send(deleted)
})
.catch(err => {
  res.json(err)
})
})
module.exports = router
