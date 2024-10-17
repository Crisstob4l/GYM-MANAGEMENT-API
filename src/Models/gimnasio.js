import mongoose from 'mongoose';
const { Schema } = mongoose;

// Lo mismo que en los anteriores JAJAJ 

const GimnasioSchema = new Schema({
    idGimnasio: Number,
    direccion: String,
    telefono: String,
    empleados: [{ type: Schema.Types.ObjectId, ref: 'Empleado' }]
});


const Gimnasio = mongoose.model('Gimnasio', GimnasioSchema)
export default Gimnasio;