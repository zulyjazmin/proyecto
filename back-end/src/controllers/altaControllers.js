// controllers/altaController.js
const Producto = require('../models/Producto');

// Controlador para crear un nuevo producto
exports.crearProducto = async (req, res) => {
  try {
    const { nombre, precio } = req.body;

    // Crea una nueva instancia del modelo Producto
    const nuevoProducto = new Producto({
      nombre,
      precio,
      // Agrega otros campos según tus necesidades
    });

    // Guarda el producto en la base de datos
    await nuevoProducto.save();

    res.status(201).json({ message: 'Producto creado con éxito' });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ message: 'Error al crear el producto' });
  }
};
