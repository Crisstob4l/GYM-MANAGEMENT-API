const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema = new Schema({
    idVenta: Number,
    monto: Number,
    tipo: String, // "suplemento" o "membresia"
    fecha: Date,
    detalles: [{ type: Schema.Types.ObjectId, ref: 'DetalleVenta' }]
});

module.exports = mongoose.model('Venta', VentaSchema);
