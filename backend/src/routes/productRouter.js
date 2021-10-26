const express = require('express')
const controller = require('../controller/productController')

const router = express.Router()

router.post('/', controller.createProduct)
router.get('/', controller.getAllProduct)

module.exports = router