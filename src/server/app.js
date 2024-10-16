require("dotenv").config();
const bodyParser = require('body-parser'); // Para poder pasar los datos a un formato más manejable
const express = require("express");
const mongoose = require('mongoose'); // Importar mongoose para conectar a MongoDB
const app = express();

app.use(express.json());
app.use(bodyParser.json()); // Parseamos el body a formato JSON


// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.MONGO_DB_NAME
});

// Conexión a la base de datos de MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error en la conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});




app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}.`);
});
