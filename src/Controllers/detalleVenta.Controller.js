import DetalleVenta from "../Models/detalleVenta.js"; // Traemos el modelo

// Crear un nuevo detalleVenta
export const crearDetalleVenta = async (req, res) => {
  // Extraemos la data de la peticion body
  const {
    cantidadVendida,
    inventarioGym,
    venta,
  } = req.body;
  // Validamos que los datos estén completos
  if (!cantidadVendida || !inventarioGym || !venta) {
    return res
      .status(400)
      .json({ Message: "Es necesario llenar todos los campos requeridos." });
  }
  // Creamos un nuevo Detalle de Venta
  const detalleVenta = new DetalleVenta({
    cantidadVendida,
    inventarioGym,
    venta,
  });
  try {
    await detalleVenta.save(); // Guardamos el Detalle de Venta en la base de datos
    res.status(201).json(detalleVenta); // Regresamos el Detalle de Venta creado
  } catch (error) {
    res.status(400).json({ Message: error.message });
  }
};

// Actualizar Detalle de Venta por ID
export const actualizarDetalleVenta = async (req, res) => {
  try {
    // Actualizar Detalle de Venta por ID coon los nuevos datos que se envia en el body
    const detalleVenta = await DetalleVenta.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!detalleVenta) {
      // si no encontramos el Detalle de Venta
      return res.status(404).json({ message: "Detalle de Venta no encontrado" });
    }
    // contestamos con el detalleVenta actualizado
    res.json(detalleVenta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los Detalles de Venta
export const obtenerDetalleVentas = async (req, res) => {
  try {
    const detalleVentas = await DetalleVenta.find(); // Buscamos los Detalles de Venta almacenados
    console.log("Obteniendo todos los detalleVentas");
    if (detalleVentas.length === 0) {
      // Si no encontramos el Detalle de Venta
      return res.status(204).json({}); // 204 no content
    }
    // de lo contrario
    res.json(detalleVentas); // Devolvemos los Detalles de Venta encontrados
  } catch (error) {
    res.status(500).json({ message: error.message }); // contestamos con un error de la bd
  }
};

// Obtener Detalle de Venta por ID
export const obtenerDetalleVentasID = async (req, res) => {
  try {
    // Buscamos al Detalle de Venta por su id, sacando el id del parametro id de la peticion
    const detalleVenta = await DetalleVenta.findById(req.params.id);
    if (!detalleVenta) {
      // Si no tenemos el Detalle de Venta
      return res.status(404).json({ message: "Detalle de Venta no encontrado" });
    } // de lo contrario
    res.json(detalleVenta); // mandamos al Detalle de Venta
  } catch (error) {
    res.status(500).json({ message: error.message }); // mandamos el error
  }
};

// Eliminar Detalle de Venta por ID
export const eliminarDetalleVenta = async (req, res) => {
  try {
    const detalleVenta = await Model.findByIdAndDelete(req.params.id);
    if (!detalleVenta) {
      // Si no tenemos el Detalle de Venta
      return res.status(404).json({ message: "Detalle de Venta no encontrado" });
    } // de lo contrario
    res.json({message: "Detalle de Venta eliminado." });
  } catch (error) {
    res.status(500).json({ message: error.message }); // mandamos el error
  }
};
