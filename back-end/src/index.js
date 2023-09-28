require('dotenv').config({
  path: '.env.local'
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const altaRoutes = require('./routes/altaRoutes');


const app = express();

// Middleware para manejar JSON
app.use(cors());
app.use(express.json());


app.use('/', altaRoutes); 


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Servidor ejecutándose en http://localhost:' + process.env.PORT);
  });
});
