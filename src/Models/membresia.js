const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MembresiaSchema = new Schema({
    idMembresia: Number,
    tipo: String,
    precio: Number,
    fechaInicio: Date,
    fechaFinal: Date,
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    gimnasios: [{ type: Schema.Types.ObjectId, ref: 'Gimnasio' }]
});

module.exports = mongoose.model('Membresia', MembresiaSchema);
