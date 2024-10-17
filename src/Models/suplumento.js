import mongoose from 'mongoose';
const { Schema } = mongoose;

const SuplementoSchema = new Schema({
    idSuplemento: Number,
    nombre: String,
    marca: String,
    precio: Number,
    inventarios: [{ type: Schema.Types.ObjectId, ref: 'InventarioGym' }]
});


const Suplemento = mongoose.model('Suplemento', SuplementoSchema);
export default Suplemento;