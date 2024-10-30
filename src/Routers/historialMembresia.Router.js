import { Router } from "express";
import { obtenerHistorialMembresias, obtenerHistorialMembresiaId, crearHistorialMembresia, actualizarHistorialMembresia, eliminarHistorialMembresia } from '../Controllers/historialMembresia.Controller.js';

const router = Router();

router.get('/historial-membresias', obtenerHistorialMembresias);
router.get('/historial-membresias/:id', obtenerHistorialMembresiaId);
router.post('/historial-membresias', crearHistorialMembresia);
router.put('/historial-membresias/:id', actualizarHistorialMembresia);
router.delete('/historial-membresias/:id', eliminarHistorialMembresia);

export default router;