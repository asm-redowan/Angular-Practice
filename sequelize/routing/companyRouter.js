const express = require('express')
const controller = require('../controller/companyController')
const {addCompanyValidator} = require('../middleware/typeValidator')

const companyroute = express.Router()




companyroute.post('/create',addCompanyValidator,controller.addCompany)
companyroute.get('/getall',controller.getAll)

module.exports = companyroute
