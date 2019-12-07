const router = require('./router')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(bodyParser.json())

app.use(router)


app.listen(3000)