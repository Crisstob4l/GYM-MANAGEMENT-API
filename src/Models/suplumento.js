const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuplementoSchema = new Schema({
    idSuplemento: Number,
    nombre: String,
    marca: String,
    precio: Number,
    inventarios: [{ type: Schema.Types.ObjectId, ref: 'InventarioGym' }]
});

module.exports = mongoose.model('Suplemento', SuplementoSchema);
