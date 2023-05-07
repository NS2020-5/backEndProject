//get the things we need
//server file were we define different routes or urls
//define base route
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/friendRoutes')
const database = require('./friendDataBase');

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
// moved all API stuff to routes/routes.js
app.use(routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))