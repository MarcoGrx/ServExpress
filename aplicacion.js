const express = require('express');
const aplicacion = express();
const port = 3000;

aplicacion.use('/static', express.static('public'));

aplicacion.get('/holamundo', (req, res) => {
  res.send('¡Hola, mundo!');
});

const bodyParser = require('body-parser');

aplicacion.use(bodyParser.text());

aplicacion.post('/ruta', (req, res) => {
  console.log(req.body);
  res.send('Texto recibido');
});

aplicacion.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

aplicacion.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
