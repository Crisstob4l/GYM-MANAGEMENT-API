import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const historialMembresiaSchema = new Schema({
  fechaPago: { type: Date, required: true },
  horaPago: { type: String },
  monto: { type: Number, required: true },
  metodoPago: { type: String },
  periodoCubiertoInicio: { type: Date, required: true },
  periodoCubiertoFinal: { type: Date, required: true },
  membresia: { type: Schema.Types.ObjectId, ref: 'Membresia', required: true }
});

export default model('HistorialMembresia', historialMembresiaSchema);
