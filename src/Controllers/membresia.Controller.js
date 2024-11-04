import membresia from '../Models/membresia.js'


export const obtenerMembresias = async (req, res) => {
    try {
        const membresias = await membresia.find();
        console.log('Obteniendo todas las membresías');

        if (membresias.length === 0) {
            return res.status(204).end(); 
        }

            res.json(membresias);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerMembresiasId = async (req, res) => {
    try {
        const idMembresia = await membresia.findById(req.params.id);
        if (!idMembresia) {
            return res.status(404).json({ message: 'Membresía no encontrada' });
        }
        res.json(idMembresia);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const actualizarMembresia = async (req, res) => {
    try {
        const membresias = await membresia.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!membresias) {
            return res.status(404).json({ message: 'Membresía no encontrada' });
        }

        res.json(membresias); 

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const crearMembresia = async (req, res) => {
    const { cliente, tipoMembresia } = req.body;

    if (!cliente || !tipoMembresia) {
        return res.status(400).json({ message: 'Es necesario llenar todos los campos' });
    }

    const nuevaMembresia = new membresia({
        cliente,
        tipoMembresia
    });

    try {
        await nuevaMembresia.save();
        res.status(201).json(nuevaMembresia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const eliminarMembresia = async (req, res) => {
    try {
        const idMembresia = await membresia.findByIdAndDelete(req.params.id);
        if (!idMembresia) {
            return res.status(404).json({ message: 'Membresía no encontrada' });
        }
        res.json({ message: 'Membresía eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
