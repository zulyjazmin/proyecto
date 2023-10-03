const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoControllers'); // Importa el controlador correcto

// Ruta para crear un nuevo mensaje de contacto
router.post('/crear', contactoController);

module.exports = router;
