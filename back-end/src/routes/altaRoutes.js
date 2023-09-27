const express = require('express');

const altaRoutes = express.Router();
const altaController = require('../controllers/altaControllers');

// Ruta para crear un nuevo producto (POST)
altaRoutes.post('/alta', altaController.crearProducto);

module.exports = altaRoutes;
