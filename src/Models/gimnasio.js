import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const gimnasioSchema = new Schema({
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  horarioApertura: { type: String, required: true },
  horarioCierre: { type: String, required: true },
  empleados: [{ type: Schema.Types.ObjectId, ref: 'Empleado' }]  // Relación inversa
});

export default model('Gimnasio', gimnasioSchema);
