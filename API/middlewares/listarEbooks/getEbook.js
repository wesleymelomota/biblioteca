const Ebooks = require('../../database/model/Ebook')

const getEbook = async (req, res) => {
    const Ebook = await Ebooks.find()
    res.json({ebooks: Ebook})
}

module.exports = getEbook