import mongoose from 'mongoose';
const { Schema } = mongoose;

const MembresiaSchema = new Schema({
    idMembresia: Number,
    tipo: String,
    precio: Number,
    fechaInicio: Date,
    fechaFinal: Date,
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    gimnasios: [{ type: Schema.Types.ObjectId, ref: 'Gimnasio' }]
});


const Membresia = mongoose.model('Membresia', MembresiaSchema);
export default Membresia;
