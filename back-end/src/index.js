require('dotenv').config({
  path: '.env'
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Configura la conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});

// Importa el modelo de Producto
const Producto = require('./models/altaModelsProducto');

app.post('/alta', async (req, res) => {
  try {
    // Crea una instancia del modelo Producto con los datos del formulario
    const producto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      stock: req.body.stock,
      marca: req.body.marca,
      descripcionCorta: req.body.descripcionCorta,
      descripcionLarga: req.body.descripcionLarga,
      categoria: req.body.categoria,
      envioSinCargo: req.body.envioSinCargo,
      // Agrega otros campos aquí...
    });

    // Guarda el producto en la base de datos
    await producto.save();

    res.status(200).json({ message: 'Producto almacenado con éxito' });
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    res.status(500).json({ message: 'Error al guardar el producto' });
  }
});

app.listen(process.env.PORT, () =>
  console.log('Servidor ejecutándose en http://localhost:' + process.env.PORT)
);
