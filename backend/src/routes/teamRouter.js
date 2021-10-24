const express = require('express')
const controller = require('../controller/teamController')

const router = express.Router()

router.post('/', controller.createTeam)

module.exports = router