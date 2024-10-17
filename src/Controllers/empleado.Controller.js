import Empleado from '../Models/empleado.js';	// Traemos el modelo

	// Función para crear un nuevo empleado
export const crearEmpleado = async (req, res) => {
		// Extraemos la data de la peticion body
    const { nombre, apellidoPaterno, apellidoMaterno, tipo, sueldo, telefono, turno } = req.body;
		// validamos que los datos esten ellnos
    if (!nombre || !apellidoMaterno || !apellidoPaterno || !tipo || !sueldo || !telefono || !turno) {
        return res.status(400).json({ Message: 'Necesario llenar todos los campos' });
    }	
			// Si lo estan, creamos al empleado

    const nuevoEmpleado = new Empleado({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        tipo,
        sueldo,
        telefono,
        turno
    });

    try {
        await nuevoEmpleado.save();	// Lo guardamos en la base de datos
        res.status(201).json(nuevoEmpleado);	// regresamos el empleado que guardamos
    } catch (error) {
        res.status(400).json({ Message: error.message });
    }
};