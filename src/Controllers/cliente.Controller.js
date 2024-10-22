import Cliente from "../Models/cliente.js"; // Traemos el modelo

// Crear un nuevo cliente
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
      .json({ Message: "Es necesario llenar todos los campos requeridos." });
  }
  // Creamos un nuevo cliente
  const cliente = new Cliente({
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
    await cliente.save(); // Guardamos el cliente en la base de datos
    res.status(201).json(cliente); // Regresamos el cliente creado
  } catch (error) {
    res.status(400).json({ Message: error.message });
  }
};

// Actualizar cliente
export const actualizarCliente = async (req, res) => {
  try {
    // Actualizar cliente por ID coon los nuevos datos que se envia en el body
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cliente) {
      // si no encontramos el cliente
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    // contestamos con el cliente actualizado
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find(); // Buscamos los clientes almacenados
    console.log("Obteniendo todos los clientes");
    if (clientes.length === 0) {
      // Si no encontramos clientes
      return res.status(204).json({}); // 204 no content
    }
    // de lo contrario
    res.json(clientes); // Devolvemos los clientes encontrados
  } catch (error) {
    res.status(500).json({ message: error.message }); // contestamos con un error de la bd
  }
};

// Obtener clientes por ID
export const obtenerClientesID = async (req, res) => {
  try {
    // Buscamos al clientes por su id, sacando el id del parametro id de la peticion
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      // Si no tenemos cliente
      return res.status(404).json({ message: "Cliente no encontrado" });
    } // de lo contrario
    res.json(cliente); // mandamos al cliente
  } catch (error) {
    res.status(500).json({ message: error.message }); // mandamos el error
  }
};
