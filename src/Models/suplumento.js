import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const suplementoSchema = new Schema({
  nombre: { type: String, required: true },
  marca: { type: String, required: true },
  tipo: { type: String, required: true },
  presentacion: { type: String, required: true },  // Ej. polvo, cápsulas
  precioUnitario: { type: Number, required: true }
});

export default model('Suplemento', suplementoSchema);
