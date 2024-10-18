import Cliente from "../Models/cliente.js"; // Traemos el modelo

// Función para crear un nuevo cliente
export const crearCliente = async (req, res) => {
  // Extraemos la data de la peticion body
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    telefono,
    telefonoEmergencia,
    fechaNacimiento,
    direccion,
    email,
    genero,
    condicionMedica,
  } = req.body;

  // Validamos que los datos estén completos
  if (!nombre || !apellidoPaterno || !apellidoMaterno || !telefono || !email) {
    return res
      .status(400)
      .json({ Message: "Necesario llenar todos los campos" });
  }

  // Creamos un nuevo empleado
  const nuevoCliente = new Cliente({
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    telefono,
    telefonoEmergencia,
    fechaNacimiento,
    direccion,
    email,
    genero,
    condicionMedica,
  });

  try {
    await nuevoCliente.save(); // Guardamos el cliente en la base de datos
    res.status(201).json(nuevoCliente); // Regresamos el cliente creado
  } catch (error) {
    res.status(400).json({ Message: error.message });
  }
};
