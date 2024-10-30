import { Router } from "express"; // Para poder utlizar Rutas
import {
  crearTipoMembresia,
  actualizarTipoMembresia,
  obtenerTipoMembresias,
  obtenerTipoMembresiasID,
  eliminarTipoMembresia,
} from "../Controllers/tipoMembresia.Controller.js"; // Traemos el controlador

const router = Router(); // Para inicializar las rutas

router.get("/tipoMembresias", obtenerTipoMembresias); // definimos ruta para obtener all
router.get("/tipoMembresias/:id", obtenerTipoMembresiasID); // para obtener por id
router.post("/tipoMembresias", crearTipoMembresia); // para crear
router.put("/tipoMembresias/:id", actualizarTipoMembresia); // para actualizar
router.delete("/tipoMembresias/:id", eliminarTipoMembresia); // para eliminar

export default router;
