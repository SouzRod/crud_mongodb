const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true})
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error)
db.once('open', () => console.log('Connected to MongoDB.'))

module.exports = db