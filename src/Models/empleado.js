import mongoose from 'mongoose';
const { Schema } = mongoose;

const EmpleadoSchema = new Schema({
    idEmpleado: Number,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    tipo: String, // intendentes, entrenadores, encargados
    sueldo: Number, // En Shein-tavos please :3
    telefono: String,
    turno: String,  // Mañana - Tarde
    gimnasios: [{ type: Schema.Types.ObjectId, ref: 'Gimnasio' }]
});

const Empleado = mongoose.model('Empleado', EmpleadoSchema);    // exportamos para poder usarlo con el nombre 'Empleado'
export default Empleado;