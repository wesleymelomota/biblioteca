const Ebooks =  require('../../database/model/Ebook')

const getCategoria = async (req, res) => {
    try{
        const categoria = req.params.categoria
        if(categoria == null){
            res.json({msg: "Revise os dados e tente novamente :(" })
        }else{

            const Ebook = await Ebooks.find({categoria: categoria.toLowerCase()})
            if(Ebook.length <= 0){
                res.json({msg: "conteudo não encontrado :-("})
            }else{
                res.json({Ebook})
            }
        } 
    }catch(err){
        res.json({msg: `ERRO: Ocorreu um poblema :(`})
    }
}

module.exports = getCategoria