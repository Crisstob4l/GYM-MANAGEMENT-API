import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ventaSchema = new Schema({
  fecha: { type: Date, default: Date.now },
  hora: { type: String },
  metodoPago: { type: String },
  empleado: { type: Schema.Types.ObjectId, ref: 'Empleado', required: true },
  detallesVenta: [{ type: Schema.Types.ObjectId, ref: 'DetalleVenta' }]
});

export default model('Venta', ventaSchema);
