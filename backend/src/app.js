const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const db = require("./database/database")

const productRouter = require('./routes/productRouter')
const teamRouter = require('./routes/teamRouter')

db.connect()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/product', productRouter)
app.use('/team', teamRouter)

module.exports = app

