const { io } = require('../server'); // importamos server.js para poder utilizar el objeto io


io.on('connection', (client) => {
    console.log('usuario conectado');
    //enviar info, el texto en '' ('enviarMensajeServ') es el nombre de la "funcion" que queremos manejar
    client.emit('enviarMensajeServ', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente el texto en '' ('enviarMensaje') es el nombre de la "funcion" que queremos manejar
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensajeServ', data);
        //{ Inicio comentario, esta forma seria igual que la de arriba ya que lo que hay en data es la misma estructura que la de abajo
        //         usuario: data.usuario,
        //         mensaje: data.mensaje
        //     }) ///Fin

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!'
        //     });
        // }


    });

});