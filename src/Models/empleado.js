import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const empleadoSchema = new Schema({
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  cargo: { type: String, required: true },  // Ej. intendente, entrenador
  sueldo: { type: Number, required: true },
  telefono: { type: String, required: true },
  telefonoEmergencia: { type: String },
  direccion: { type: String },
  fechaNacimiento: { type: Date },
  genero: { type: String },
  email: { type: String, required: true },
  nss: { type: String },
  gimnasios: [{ type: Schema.Types.ObjectId, ref: 'Gimnasio' }]  // Relaciones
});

export default model('Empleado', empleadoSchema);   // exportamos para usarlo donde sea necesario
