const mongoose = require('mongoose')
const {Schema} = mongoose

const EbookSchema = new Schema({
    titulo: String,
    sinopse: String,
    autor: String,
    categoria: String 
})

const Ebooks = mongoose.model('Ebooks', EbookSchema)

module.exports = Ebooks