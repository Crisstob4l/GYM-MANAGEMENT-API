import historialMembresia from '../Models/historialMembresia.js'


export const obtenerHistorialMembresias = async (req, res) => {
    try {
        const historial = await historialMembresia.find().populate('membresia');
        console.log('Obteniendo historial de membresías');

        if (historial.length === 0) {
            return res.status(204).end(); 
        }

        res.json(historial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerHistorialMembresiaId = async (req, res) => {
    try {
        const historial = await historialMembresia.findById(req.params.id).populate('membresia');
        if (!historial) {
            return res.status(404).json({ message: 'Historial de membresía no encontrado' });
        }
        res.json(historial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const crearHistorialMembresia = async (req, res) => {
    const { fechaPago, horaPago, monto, metodoPago, periodoCubiertoInicio, periodoCubiertoFinal, membresia } = req.body;
  
    try {
      const nuevoHistorial = new historialMembresia({
        fechaPago,
        horaPago,
        monto,
        metodoPago,
        periodoCubiertoInicio,
        periodoCubiertoFinal,
        membresia
      });
  
      await nuevoHistorial.save();
      res.status(201).json(nuevoHistorial);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


export const actualizarHistorialMembresia = async (req, res) => {
    try {
        const historial = await historialMembresia.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('membresia');

        if (!historial) {
            return res.status(404).json({ message: 'Historial de membresía no encontrado' });
        }

        res.json(historial);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const eliminarHistorialMembresia = async (req, res) => {
    try {
        const historial = await historialMembresia.findByIdAndDelete(req.params.id);
        if (!historial) {
            return res.status(404).json({ message: 'Historial de membresía no encontrado' });
        }
        res.json({ message: 'Historial de membresía eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};