const Ebooks = require('../../database/model/Ebook')

async function addEbook(req, res) {
    
    try{
        
        const titulo  = req.body.titulo
        const sinopse = req.body.sinopse
        const autor = req.body.autor
        const categoria = req.body.categoria

        if(titulo == null || sinopse == null || autor == null){
            res.json({msg: "Insira os dados!"})
        }else{
            const Ebook = new Ebooks({
                titulo: titulo.toLowerCase(), 
                sinopse, 
                autor: autor.toLowerCase(),
                categoria: categoria.toLowerCase()
            })
            Ebook.save()
            res.json({msg: "Salvo com sucesso"})
            
        }
        

    }catch(err){
        res.json({msg: err})
    }
}
 
module.exports = addEbook