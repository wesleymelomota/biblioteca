const mongoose = require('mongoose')
const config = require('../strConnection/strconnection')

const connect = async () => {
    try{
        await mongoose.connect(config.MongoConnect)
        console.log("conectado com sucesso ao DB")
    }catch(err) {
        console.log(`ERRO: ${err}`)
    }
}

module.exports = connect