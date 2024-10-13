const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definición del esquema que es el equivalente a la tabla en sql con sus atributos
const ClienteSchema = new Schema({
    idCliente: Number,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    telefono: String,
                        // Signfica el atributo con el cual haremos referencia a mebresia = ID
    membresias: [{ type: Schema.Types.ObjectId, ref: 'Membresia' }] //referencia a la relacion que tiene con las membresias
});

module.exports = mongoose.model('Cliente', ClienteSchema);  // Exportamos para usar el esquema con el nombre Cliente
