import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const tipoMembresiaSchema = new Schema({
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  frecuenciaPago: { type: String, required: true }  // mensual, anual
});

export default model('TipoMembresia', tipoMembresiaSchema);
