const express = require('express')
const app = express()
require('./db-connection.js')
const bodyParser = require('body-parser')

const port = 3000

const TruckRouter = require('./routes/truck')
const IndexRouter = require('./routes/index.js')

app.use(bodyParser.json())
app.use('/',IndexRouter)
app.use('/truck',TruckRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})