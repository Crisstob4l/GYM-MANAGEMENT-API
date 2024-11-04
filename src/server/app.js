import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';  // Para poder pasar los datos a un formato más manejable
import express from 'express';  // importamos los mudulos de express
import mongoose from 'mongoose'; // Importar mongoose para conectar a MongoDB

import empleadoRouter from '../Routers/empleado.Router.js';  // Ahora incluye la extensión .js
import ventaRouter from '../Routers/venta.Router.js';
import clienteRouter from '../Routers/cliente.Router.js';
import membresiaRouter from '../Routers/membresia.router.js';
import inventarioGymRouter from '../Routers/inventarioGym.Routers.js';
import historialMembresia from '../Routers/historialMembresia.Router.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json()); // Parseamos el body a formato JSON



// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.MONGO_DB_NAME
});

// Creamos las rutas
app.use('/api', empleadoRouter);
app.use('/api', ventaRouter);
app.use('/api', clienteRouter);
app.use('/api', membresiaRouter);
app.use('/api', inventarioGymRouter);
app.use('/api', historialMembresia);




// Conexión a la base de datos de MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error en la conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});




app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}.`);
});

console.log('MONGO_URL:', process.env.MONGO_URL);
console.log('MONGO_DB_NAME:', process.env.MONGO_DB_NAME);
console.log('PORT:', process.env.PORT);
