import { Router } from "express";
import { obtenerInventarioGym, obtenerInventarioId, crearInventario, eliminarInventario, actualizarInventario} from '../Controllers/inventarioGym.Controller.js'


const router = Router();

router.get('/inventario', obtenerInventarioGym);
router.get('/inventario/:id', obtenerInventarioId);
router.post('/inventario', crearInventario);
router.put('/inventario/:id', actualizarInventario);
router.delete('/inventario/:id', eliminarInventario);

export default router;