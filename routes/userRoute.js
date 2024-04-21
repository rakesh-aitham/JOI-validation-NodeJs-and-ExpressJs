const express = require('express')
const joiController = require('../controllers/joiController')
const { addUser, getUsers } = require('../controllers/user/userController')
const userValidation = require('../controllers/user/userValidator')

const router = express.Router()

router.get('/', joiController)

router.post('/addUser', userValidation, addUser)

router.get("/getUsers", getUsers);

module.exports = router