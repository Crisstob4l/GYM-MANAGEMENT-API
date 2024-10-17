import mongoose from 'mongoose';
const { Schema } = mongoose;
// Definición del esquema que es el equivalente a la tabla en sql con sus atributos
const ClienteSchema = new Schema({
    idCliente: Number,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    telefono: String,
                        // Signfica el atributo con el cual haremos referencia a mebresia = ID
    membresias: [{ type: Schema.Types.ObjectId, ref: 'Membresia' }] //referencia a la relacion que tiene con las membresias
});


const Cliente = mongoose.model('Cliente', ClienteSchema);
export default Cliente;