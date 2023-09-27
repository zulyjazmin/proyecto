const Producto = require('../models/altaModelsProducto');


const altaController = {
  crearProducto: async (req, res) => {
    try {
      console.log('Datos del formulario:', req.body);

      // Obtener los datos del formulario desde la solicitud
      const {
        nombre,
        precio,
        stock,
        marca,
        descripcionCorta,
        descripcionLarga,
        categoria,
        envioSinCargo,
      } = req.body;

      // Obtener la imagen cargada desde la solicitud
      const imagen = req.file;

      // Verificar si se ha cargado una imagen
      if (!imagen) {
        return res.status(400).json({ message: 'Debes subir una imagen' });
      }


      // Crear una nueva instancia del modelo Producto con la ubicación de la imagen
      const nuevoProducto = new Producto({
        nombre,
        precio,
        stock,
        marca,
        descripcionCorta,
        descripcionLarga,
        categoria,
        envioSinCargo,
        imagen: imageFileName,  // Almacenar la ubicación de la imagen en la base de datos
      });

      // Guardar el producto en la base de datos
      const resultado = await nuevoProducto.save();
      console.log('Datos guardados en la base de datos:', resultado);

      // Responder con éxito
      res.status(201).json({ message: 'Producto creado con éxito', producto: resultado });
    } catch (error) {
      // Manejo de errores
      console.error('Error al crear el producto:', error);
      res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
  },
};

module.exports = altaController;
