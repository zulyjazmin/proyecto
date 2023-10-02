const Contacto = require('../models/contactoModels');

const contactoController = async (req, res) => {
  try {
    const { nombre, telefono, email, mensaje } = req.body;

    const nuevoMensaje = new Contacto({
      nombre,
      telefono,
      email,
      mensaje,
    });

    await nuevoMensaje.save();

    res.status(201).json({ mensaje: 'Mensaje de contacto guardado con éxito' });
  } catch (error) {
    console.error('Error al guardar el mensaje de contacto:', error);
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
  }
};

module.exports = contactoController;
