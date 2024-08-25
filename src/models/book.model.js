const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String
    }
)

//Manera especial para exportar un modelo de Mongo
module.exports = mongoose.model('Book', bookSchema)