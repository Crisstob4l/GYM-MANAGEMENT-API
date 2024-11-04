import { Router } from "express"; // Para poder utlizar Rutas
import {
  crearDetalleVenta,
  actualizarDetalleVenta,
  obtenerDetalleVentas,
  obtenerDetalleVentasID,
  eliminarDetalleVenta,
} from "../Controllers/detalleVenta.Controller.js"; // Traemos el controlador

const router = Router(); // Para inicializar las rutas

router.get("/detalleVentas", obtenerDetalleVentas); // definimos ruta para obtener all
router.get("/detalleVentas/:id", obtenerDetalleVentasID); // para obtener por id
router.post("/detalleVentas", crearDetalleVenta); // para crear
router.put("/detalleVentas/:id", actualizarDetalleVenta); // para actualizar
router.delete("/detalleVentas/:id", eliminarDetalleVenta); // para eliminar

export default router;
