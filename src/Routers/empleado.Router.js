import { Router } from "express";   // Para poder utlizar Rutas
import { actualizarEmpleado, crearEmpleado, obtenerEmpleados, obtenerEmpleadosID } from '../Controllers/empleado.Controller.js';   // Traemos el controlador

const router = Router();    // Para inicializa las rutas



router.get('/empleados', obtenerEmpleados);  // definimos ruta para obtener all
router.get('/empleados/:id', obtenerEmpleadosID) // para obtener por id
router.post('/empleados', crearEmpleado);
    // para crear
router.put('/empleados/:id', actualizarEmpleado);   // para actualizar empleado


export default router;