require('dotenv').config({
  path: '.env.local'
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const altaRoutes = require('./routes/altaRoutes');



const app = express();
const uploads = multer({
    dest: '/uploads',
    storage:multer.diskStorage({
      destination: '/uploads'
    })
})

const imageDir = str => `images/${str}`;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use(altaRoutes);
app.post('/carga', uploads.single('csv'), (req, res) => 
{
     fs.copyFile(req.file.path, imageDir(req.file.originalname), (err) => {
        console.log('OK');
     } );
   
    
         res.json({
              file: req.file,
              body: req.body
    })
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});

mongoose.connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log('Servidor ejecutándose en http://localhost:' + process.env.PORT)
    )
  );
