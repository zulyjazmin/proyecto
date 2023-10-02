const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoControllers');

// Ruta para crear un nuevo mensaje de contacto
router.post('/crear', contactoController);

module.exports = router;
