const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventarioGymSchema = new Schema({
    idInventarioGym: Number,
    cantidad: Number,
    gimnasio: { type: Schema.Types.ObjectId, ref: 'Gimnasio' },
    suplemento: { type: Schema.Types.ObjectId, ref: 'Suplemento' }
});

module.exports = mongoose.model('InventarioGym', InventarioGymSchema);
