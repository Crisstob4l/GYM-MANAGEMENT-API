import empleado from '../Models/empleado.js';
import Empleado from '../Models/empleado.js'; // Traemos el modelo





// vamos a obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
	try {
		const empleados = await Empleado.find();	// Buscamos los empleados almacenados
		console.log("Obteniendo todos los empleados")

		if (empleados.length === 0) {	// Si no encontramos empleados
			return res.status(204).json({});	// 204 no content
			
		}
			// de lo contrario
			res.json(empleados);	// Devolvemos los empleados encontrados
		
	} catch (error) {
		res.status(500).json({message: error.message})	// contestamos con un error de la bd
		
	}

}


// Obtener empleados por ID
export const obtenerEmpleadosID = async (req, res) => {
	try {
			// Buscamos al empleado por su id, sacando el id del parametro id de la peticion
		const empleado = await Empleado.findById(req.params.id);
		if (!empleado) {	// Si no tenemos empleado
			return res.status(404).json({message: 'Empleado no encontrado'})
			
		} // de lo contrario
		res.json(empleado);	// mandamos al empleado

	} catch (error) {
		res.status(500).json({message: error.message});	// mandamos el error
		
	}


}


	// Actualizizar empleado
	export const actualizarEmpleado = async (req, res) => {
		try {
        // Actualizar empleado por ID coon los nuevos datos que se envia en el body
        const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        
        if (!empleado) {	// si no encontramos el empleado
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        
        // contestamos con el empleado actualizado
        res.json(empleado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

	};







// Función para crear un nuevo empleado
export const crearEmpleado = async (req, res) => {
    // Extraemos la data de la peticion body
    const { 
        nombre, 
        apellidoPaterno, 
        apellidoMaterno, 
        cargo, 
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
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !cargo || !sueldo || !telefono || !turno || !fechaNacimiento || !email || !direccion) {
        return res.status(400).json({ Message: 'Necesario llenar todos los campos' });
    }

    // Creamos un nuevo empleado
    const nuevoEmpleado = new Empleado({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        cargo,
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


    
