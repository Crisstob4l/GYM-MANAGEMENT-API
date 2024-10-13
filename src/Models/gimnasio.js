const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Lo mismo que en los anteriores JAJAJ 

const GimnasioSchema = new Schema({
    idGimnasio: Number,
    direccion: String,
    telefono: String,
    empleados: [{ type: Schema.Types.ObjectId, ref: 'Empleado' }]
});

module.exports = mongoose.model('Gimnasio', GimnasioSchema);
