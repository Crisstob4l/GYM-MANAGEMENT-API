import venta from "../Models/venta.js";    // Para usar el modelo


// Funcion para registrar una nueva venta
export const registrarVenta = async (req, res) => {
	console.log('Registrando Nueva venta')
	const {
		fecha,
		hora,
		metodoPago,
		empleado,
		detallesVenta

	} = req.body;   // Extraemos los datos a almacenar de la peticion

        // Vamos a validar de que estamos obteniendo todos los datos
    if (!fecha || !hora || !metodoPago || !empleado || !detallesVenta) {
        return res.status(400).json({
            message: 'Todos los datos tienen que ser llenados...'
        })
    }   // Si recibimos todos los datos

    const nuevaVenta = new venta ({	// Creamos la nueva venta
			fecha,
			hora,
			metodoPago,
			empleado,
			detallesVenta
    })
			// lo guardamos en nuestra db
		try {
			await nuevaVenta.save();
			res.status(201).json(nuevaVenta);	// responde de manera exitosa y devolvemos la venta que se registro

		} catch (error) {
			res.status(400).json({message: error.message});	// Si algo falla, mandamos el error
			
		}

};

// Funcion para obtener ALL ventas registradas
export const verVentas = async (req, res) => {
	try {
		const ventas = await venta.find();	// Buscamos todas las ventas que esten alamcenadas

		if (ventas.length === 0) {	// si no se encontro una venta
			return res.status(204).json({})	// 204 no content
			
		}

		res.send(ventas);	// contestamos con las ventas encontradas

	} catch (error) {
		res.status(500).json({message: error.message})	// error en bd

	}

}

// ver ventas por ID
export const ventasPorID = async (req, res) => {
	try {
		const ventas = await venta.findById(req.params.id);	// buscamos por el id
		if (ventas.length === 0) {	// Si no encontramos alguna venta con ese id
			return res.status(404).json({message: 'Registro no encontrado'});
	
		}

		res.json(ventas);	// Devolvemos la venta encontrada

	} catch (error) {	// si tenemos algun error
		res.status(500).json({message: error.message});	// eror en db
	}

}