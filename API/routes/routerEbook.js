const express = require('express')
const getEbook = require('../middlewares/listarEbooks/getEbook')
const addEbook = require('../middlewares/addEbook/addEbook.js')
const updateEbook = require('../middlewares/updateEbook/updateEbook.js')
const deleteEbook = require('../middlewares/deleteEbook/deleteEbook.js')
const getOneEbook = require('../middlewares/getOneEbook/getOneEbook')
const getCategoria = require('../middlewares/categoria/getCategoria')
const ebook = express.Router()

//funções para operação CRUD
ebook.post('/ebook/add', addEbook) //
ebook.get('/listarEbooks', getEbook)
ebook.put('/updateEbook/:_id', updateEbook) //
ebook.delete('/deleteEbook/:id', deleteEbook) //

//pegar ebook por titulo ou autor ou categoria
ebook.get('/getOne', getOneEbook)
ebook.get('/categoria/:categoria', getCategoria)

module.exports = ebook