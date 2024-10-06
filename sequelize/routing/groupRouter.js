const express = require('express')
const controller = require('../controller/groupController')
const { checkAuth } = require('../middleware/auth')
const {addGroupValidator} = require('../middleware/typeValidator')

const grouproute = express.Router()

grouproute.post("/create",checkAuth,addGroupValidator,controller.addGroup)
grouproute.get("/getall",controller.getAll)


module.exports = grouproute