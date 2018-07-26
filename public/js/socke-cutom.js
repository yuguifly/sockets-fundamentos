//aqui controlamos las conexiones
var socket = io(); // mismo objeto IO que usamos en el  backend
//aqui se conecta on escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});
//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con servidor');
});
//enviar informacion el texto en '' ('enviarMensaje') es el nombre de la "funcion" que queremos manejar
socket.emit('enviarMensaje', {
    usuario: 'Hugo',
    mensaje: 'Hola'
}, function(resp) {
    console.log('respuesta serv:', resp);
});
//ecuchar info del servidor el texto en '' ('enviarMensajeServ') es el nombre de la "funcion" que queremos manejar
socket.on('enviarMensajeServ', function(respuesta) {
    console.log('info del servidor', respuesta);
});