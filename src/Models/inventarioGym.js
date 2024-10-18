import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const inventarioGymSchema = new Schema({
  cantidadExistencia: { type: Number, required: true },
  gimnasio: { type: Schema.Types.ObjectId, ref: 'Gimnasio', required: true },
  suplemento: { type: Schema.Types.ObjectId, ref: 'Suplemento', required: true }
});

export default model('InventarioGym', inventarioGymSchema);
