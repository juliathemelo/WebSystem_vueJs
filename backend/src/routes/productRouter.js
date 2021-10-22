const express = require('express')
const controller = require('../controller/productController')

const router = express.Router()

router.post('/', controller.createProduct)

module.exports = router