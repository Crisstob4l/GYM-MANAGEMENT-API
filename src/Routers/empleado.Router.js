import { Router } from "express";   // Para poder utlizar Rutas
import { crearEmpleado } from '../Controllers/empleado.Controller.js';   // Traemos el controlador

const router = Router();    // Para inicializa las rutas



router.post('/empleado', crearEmpleado);    // definimos ruta

export default router;