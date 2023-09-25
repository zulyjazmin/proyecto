// routes/altaRoutes.js
const express = require('express');
const router = express.Router();
const altaController = require('../controllers/altaController');

// Ruta para crear un nuevo producto
router.post('/alta', altaController.crearProducto);

module.exports = router;
