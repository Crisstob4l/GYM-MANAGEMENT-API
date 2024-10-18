import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const detalleVentaSchema = new Schema({
  cantidadVendida: { type: Number, required: true },
  inventarioGym: { type: Schema.Types.ObjectId, ref: 'InventarioGym', required: true },
  venta: { type: Schema.Types.ObjectId, ref: 'Venta', required: true }
});

export default model('DetalleVenta', detalleVentaSchema);
