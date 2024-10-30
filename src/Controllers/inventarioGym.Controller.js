import inventario from '../Models/inventarioGym.js'

export const obtenerInventarioGym = async (req, res) => {
    try {
        const inventarioGym = await inventario.find();
        console.log('Obteniendo inventario');

        if(inventarioGym.length === 0){
            return res.status(204).end(); 
        }
            res.json(inventarioGym);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerInventarioId = async (req, res) => {
    try {
        const idinventarioGym = await inventario.findById(req.params.id);
        if (!idinventarioGym) {
            return res.status(404).json({ message: 'inventario no encontrado' });
        }
        res.json(idinventarioGym);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const crearInventario = async (req, res) => {
    const { cantidadExistencia, gimnasio, suplemento } = req.body;

    if (!cantidadExistencia || !gimnasio || !suplemento) {
        return res.status(400).json({ message: 'Todos los campos son necesarios' });
    }

    const nuevoInventario = new inventario({
        cantidadExistencia,
        gimnasio,
        suplemento
    });

    try {
        await nuevoInventario.save();
        res.status(201).json(nuevoInventario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const eliminarInventario = async (req, res) => {
    try {
        const idInventarioGym = await inventario.findByIdAndDelete(req.params.id);
        if (!idInventarioGym) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }
        res.json({ message: 'Inventario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const actualizarInventario = async (req, res) => {
    try {
        const idInventarioGym = await inventario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!idInventarioGym) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }

        res.json(idInventarioGym);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
