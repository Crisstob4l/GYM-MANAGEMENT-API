import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const membresiaSchema = new Schema({
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
  tipoMembresia: { type: Schema.Types.ObjectId, ref: 'TipoMembresia', required: true }
});

export default model('Membresia', membresiaSchema);
