import { Router } from "express";  
import { obtenerMembresias, obtenerMembresiasId, actualizarMembresia, crearMembresia, eliminarMembresia } from '../Controllers/membresia.Controller.js';

const router = Router();

router.get('/membresias', obtenerMembresias);       
router.get('/membresias/:id', obtenerMembresiasId); 
router.post('/membresia', crearMembresia);          
router.put('/membresias/:id', actualizarMembresia); 
router.delete('/membresias/:id', eliminarMembresia);

export default router;