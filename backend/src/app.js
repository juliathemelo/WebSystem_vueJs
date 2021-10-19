const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const db = require("./database/database")

db.connect()

const app = express()
app.use(cors())
app.use(express.json())

module.exports = app

