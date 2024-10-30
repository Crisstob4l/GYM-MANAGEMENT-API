import { Router } from "express"; // Para poder utlizar Rutas
import {
  crearCliente,
  actualizarCliente,
  obtenerClientes,
  obtenerClientesID,
  eliminarCliente,
} from "../Controllers/cliente.Controller.js"; // Traemos el controlador

const router = Router(); // Para inicializar las rutas

router.get("/clientes", obtenerClientes); // definimos ruta para obtener all
router.get("/clientes/:id", obtenerClientesID); // para obtener por id
router.post("/clientes", crearCliente); // para crear
router.put("/clientes/:id", actualizarCliente); // para actualizar
router.delete("/clientes/:id", eliminarCliente); // para eliminar

export default router;
