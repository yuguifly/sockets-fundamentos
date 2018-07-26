const express = require('express'); //importar expres
const socketIO = require('socket.io'); //importamos libreria socket
const path = require('path'); //importar libreria del path
const http = require('http'); //modulo que trae por defecto express que tenemos que importar para poder usar algunas funcionalidades
const app = express(); //inicializamos express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public'); //crear una carpeta publica para compartirla
const port = process.env.PORT || 3000; //iniciar puerto si estamos en produccion o desarrollo

app.use(express.static(publicPath)); //middleware para habilitar la carpeta publica y que todo el mundo pueda acceder a ella

//IO=esta es la comunicación del backend
// let io = socketIO(server); esta forma la usamos cuando el codigo esta dentro del mismo fichero y podemos usar la variable io
module.exports.io = socketIO(server); //de esta forma tenemos el objeto dentro de module.exports y lo podremos utilizar en socket.js

require('./sockets/socket'); //con esto indicamos que utilice /sockets/socket.js 

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});