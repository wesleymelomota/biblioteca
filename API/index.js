const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connect = require('./database/connection/connection')
require('dotenv').config()
const Book = require('./routes/routerEbook.js')


//config
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

//connection DB
connect()

//Rotas
app.use(Book)


app.listen(process.env.PORTA, () => {
    console.log("Servidor Rodando :-)")
})
