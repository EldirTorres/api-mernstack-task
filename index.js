const express = require('express');
const conectarDB = require('./config/db')
//const cors = require('cors');

//Crear el servidor
const app = express()

//Conectar a la db
conectarDB();

// habilitar cors
//app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }
    next();
  });

// Habilitar express.json, no es necesario ya usar bodyparser
app.use( express.json({ extended: true }));

//Puerto de la app, es necesario dejarlo de esta manera para poder desplegar en heroku
const port = process.env.port || 4000;

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//Arrancar la app
app.listen(port, '0.0.0.0', () => { //modificaciones para despliegue en heroku
    console.log(`El servidor se encuentra corriendo en el puerto ${port}`)
})
