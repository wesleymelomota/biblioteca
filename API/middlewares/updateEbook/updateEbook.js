const Ebooks = require('../../database/model/Ebook')

const updateEbook = async (req, res) => {
    try{
        const _id = req.params._id
        const titulo = req.body.titulo
        const sinopse = req.body.sinopse
        const autor = req.body.autor
        const categoria = req.body.categoria

        if(titulo == null || sinopse == null || autor == null){
            res.json({msg: "Os campos não podem ser vazios"})
        }else{
            await Ebooks.findOne({_id}).update({
                titulo: titulo.toLowerCase(), 
                sinopse, 
                autor: autor.toLowerCase(),
                categoria: categoria.toLowerCase()
            })
            res.json({msg: "Atualizado com sucesso! :)"})

        }

    }catch(err){
        res.json({msg: `Ocorreu um erro: ${err}`})
    }
}

module.exports = updateEbook