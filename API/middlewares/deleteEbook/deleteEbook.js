const Ebooks = require('../../database/model/Ebook')

const deleteEbook = async (req, res) => {
    try{
        const id = req.params.id
        if(id == null){
            res.json({msg: "Precisa passar o Id"})
        }else{
            if(id){
                await Ebooks.findOne().deleteOne({_id: id})
                res.json({msg: "Conteudo excluido"})
            }
        }
    }catch(err){
        res.json({msg: `Ocorreu um Erro :( ${err}`})
    }
    
}

module.exports = deleteEbook