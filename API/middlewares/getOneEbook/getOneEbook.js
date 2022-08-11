const Ebooks = require('../../database/model/Ebook')

const getOneEbook = async (req, res) => {
    try{
        const TituloOrAutor = req.body.titulo || req.body.autor //entrada de dados
        const method = req.body.titulo ? 'titulo' : 'autor'
        if(TituloOrAutor == null){
            res.json({msg: "Dados invalidos! revise e envie novamente"})
        }else{
            const Ebook = await Ebooks.find({[method]: TituloOrAutor.toLowerCase()})
            if(Ebook.length <= 0){
                res.json({msg: "conteudo não encontrado! :("})
            }else{
                res.json({Ebook})
            }
        }
    }catch(err){
        res.json({msg: `ERRO: ${err}`})
    }
}

module.exports = getOneEbook