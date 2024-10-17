import mongoose from 'mongoose';
const { Schema } = mongoose;

const InventarioGymSchema = new Schema({
    idInventarioGym: Number,
    cantidad: Number,
    gimnasio: { type: Schema.Types.ObjectId, ref: 'Gimnasio' },
    suplemento: { type: Schema.Types.ObjectId, ref: 'Suplemento' }
});

const InventarioGym = mongoose.model('InventarioGym', InventarioGymSchema);
export default InventarioGym;