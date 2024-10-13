const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definición del esquema que es el equivalente a la tabla en sql con sus atributos
const DetalleVentaSchema = new Schema({
    idDetalleVenta: Number,
    // Como resuelve muchos a muchos a muchos hara referencia a los ids de inventarioGym, membresia y venta
    inventarioGym: { type: Schema.Types.ObjectId, ref: 'InventarioGym' },
    membresia: { type: Schema.Types.ObjectId, ref: 'Membresia' },
    venta: { type: Schema.Types.ObjectId, ref: 'Venta' }
});

module.exports = mongoose.model('DetalleVenta', DetalleVentaSchema);    // Lo mismo, exportamos con el nombre 'DetalleVenta' para usar el exquema
