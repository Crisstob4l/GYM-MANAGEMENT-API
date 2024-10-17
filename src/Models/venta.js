import mongoose from 'mongoose';
const { Schema } = mongoose;

const VentaSchema = new Schema({
    idVenta: Number,
    monto: Number,
    tipo: String, // "suplemento" o "membresia"
    fecha: Date,
    detalles: [{ type: Schema.Types.ObjectId, ref: 'DetalleVenta' }]
});


const Venta = mongoose.model('Venta', VentaSchema);
export default Venta;
