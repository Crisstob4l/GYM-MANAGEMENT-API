import Empleado from '../Models/empleado.js'; // Traemos el modelo

// Función para crear un nuevo empleado
export const crearEmpleado = async (req, res) => {
    // Extraemos la data de la peticion body
    const { 
        nombre, 
        apellidoPaterno, 
        apellidoMaterno, 
        tipo, 
        sueldo, 
        telefono, 
        telefonoEmergencia,
        direccion,
        fechaNacimiento,
        genero,
        email,
        nss,
        turno,
        gimnasios // IDs de gimnasios (si están asignados)
    } = req.body;

    // Validamos que los datos estén completos
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !tipo || !sueldo || !telefono || !turno || !fechaNacimiento || !email || !direccion) {
        return res.status(400).json({ Message: 'Necesario llenar todos los campos' });
    }

    // Creamos un nuevo empleado
    const nuevoEmpleado = new Empleado({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        tipo,
        sueldo,
        telefono,
        telefonoEmergencia,
        direccion,
        fechaNacimiento,
        genero,
        email,
        nss,
        turno,
        gimnasios
    });

    try {
        await nuevoEmpleado.save(); // Guardamos el empleado en la base de datos
        res.status(201).json(nuevoEmpleado); // Regresamos el empleado creado
    } catch (error) {
        res.status(400).json({ Message: error.message });
    }
};


    
