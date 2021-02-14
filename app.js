// Importaciones necesarias
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// Esto nos limpia la consola antes de ejecutar el codgigo
console.clear();

// Ejecutamos nuestra funcion
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );