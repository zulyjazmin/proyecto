require('dotenv').config({
    path: '.env'
 });
const express = require('express');



const app = express();

app.listen(process.env.Port, () =>
   console.log('Servidor ejecutandose en http://localhost:'+process.env.PORT))