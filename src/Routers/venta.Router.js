import { Router } from "express";
import { registrarVenta, ventasPorID, verVentas } from "../Controllers/venta.Controller.js";   // Traemos al controlador

const router = Router();    // Para poder crear las rutas

router.post('/ventas', registrarVenta); // para registrar
router.get('/ventas', verVentas);    // para ver las ventas registradas
router.get('/ventas/:id', ventasPorID); // para buscar registros por ID

export default router;