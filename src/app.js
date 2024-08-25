const express = require('express');
const { config } = require('dotenv');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
config()

const bookRoutes = require('./routes/book.routes')

// Usamos express para los MIDDLEWARES
const app = express();
app.use(bodyParser.json()) // Parseador de Bodies

// Aquí conectaremos la base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})