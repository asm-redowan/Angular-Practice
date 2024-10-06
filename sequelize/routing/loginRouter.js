const express = require('express')
const controller = require('../controller/loginController')
// const {addUserValidator} = require('../middleware/typeValidator')

const loginroute = express.Router()

loginroute.post('/login',controller.login)


module.exports = loginroute