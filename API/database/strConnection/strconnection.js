require('dotenv').config()
const config = {
    MongoConnect: `mongodb+srv://wesleyAdmin:${process.env.DB_PASSWORD}@encurt-url.t0ihx.mongodb.net/?retryWrites=true&w=majority`
}

module.exports = config