import TipoMembresia from "../Models/tipoMembresia.js"; // Traemos el modelo

// Crear un nuevo tipoMembresia
export const crearTipoMembresia = async (req, res) => {
  // Extraemos la data de la peticion body
  const {
    descripcion,
    precio,
    frecuenciaPago,
  } = req.body;
  // Validamos que los datos estén completos
  if (!descripcion || !precio || !frecuenciaPago) {
    return res
      .status(400)
      .json({ Message: "Es necesario llenar todos los campos requeridos." });
  }
  // Creamos un nuevo tipo de Membresía
  const tipoMembresia = new TipoMembresia({
    descripcion,
    precio,
    frecuenciaPago,
  });
  try {
    await tipoMembresia.save(); // Guardamos el tipoMembresia en la base de datos
    res.status(201).json(tipoMembresia); // Regresamos el tipoMembresia creado
  } catch (error) {
    res.status(400).json({ Message: error.message });
  }
};

// Actualizar tipoMembresia por ID
export const actualizarTipoMembresia = async (req, res) => {
  try {
    // Actualizar tipoMembresia por ID coon los nuevos datos que se envia en el body
    const tipoMembresia = await TipoMembresia.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tipoMembresia) {
      // si no encontramos el tipoMembresia
      return res.status(404).json({ message: "Tipo de Membresía no encontrado" });
    }
    // contestamos con el tipoMembresia actualizado
    res.json(tipoMembresia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los tipos de Membresías
export const obtenerTipoMembresias = async (req, res) => {
  try {
    const tipoMembresias = await TipoMembresia.find(); // Buscamos los tipoMembresias almacenados
    console.log("Obteniendo todos los tipoMembresias");
    if (tipoMembresias.length === 0) {
      // Si no encontramos tipoMembresias
      return res.status(204).json({}); // 204 no content
    }
    // de lo contrario
    res.json(tipoMembresias); // Devolvemos los tipoMembresias encontrados
  } catch (error) {
    res.status(500).json({ message: error.message }); // contestamos con un error de la bd
  }
};

// Obtener tipoMembresias por ID
export const obtenerTipoMembresiasID = async (req, res) => {
  try {
    // Buscamos al tipoMembresias por su id, sacando el id del parametro id de la peticion
    const tipoMembresia = await TipoMembresia.findById(req.params.id);
    if (!tipoMembresia) {
      // Si no tenemos tipoMembresia
      return res.status(404).json({ message: "Tipo de Membresía no encontrado" });
    } // de lo contrario
    res.json(tipoMembresia); // mandamos al tipoMembresia
  } catch (error) {
    res.status(500).json({ message: error.message }); // mandamos el error
  }
};

// Eliminar tipoMembresia por ID
export const eliminarTipoMembresia = async (req, res) => {
  try {
    const tipoMembresia = await Model.findByIdAndDelete(req.params.id);
    if (!tipoMembresia) {
      // Si no tenemos tipoMembresia
      return res.status(404).json({ message: "Tipo de Membresía no encontrado" });
    } // de lo contrario
    res.json({message: "Tipo de membresía eliminado." });
  } catch (error) {
    res.status(500).json({ message: error.message }); // mandamos el error
  }
};
