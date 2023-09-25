const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Boolean,
  marca: String,
  descripcionCorta: String,
  descripcionLarga: String,
  categoria: String,
  envioSinCargo: Boolean,
  // Otros campos que desees almacenar...
}, { collection: 'altaProductos' });

module.exports = mongoose.model('Producto', productoSchema);
