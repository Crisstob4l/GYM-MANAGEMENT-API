import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const clienteSchema = new Schema({
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  telefono: { type: String, required: true },
  telefonoEmergencia: { type: String },
  fechaNacimiento: { type: Date },
  direccion: { type: String },
  email: { type: String, required: true },
  genero: { type: String },
  condicionMedica: { type: String }
});

export default model('Cliente', clienteSchema);
