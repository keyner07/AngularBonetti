const express = require('express');
const bodyParser = require('body-parser');
const expressCache = require('express-cache-controller');
const cors = require('cors');
const router = require('./backend/routes/routes');
const path = require('path');
const db = require('./backend/database/db');

// Inicializacion de express
const app = express();

// Creando un link al build de angular
const distDir = path.join(__dirname, '/dist/');
app.use(express.static(distDir));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressCache());
app.use('/', router);

// Con esto hacemos la conexion a la base de datos.
db(process.env.DATABASE_CONNECT);

app.use(cors());
// app.use((req, res, next) => {
//     // res.header('Access-Control-Allow-Origin', '*', 'http://localhost:4200');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

const port = process.env.PORT || 80;
// Aqui le decimos a NodeJS en que puerto escuchara.
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})
