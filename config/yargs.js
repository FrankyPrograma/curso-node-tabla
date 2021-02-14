const { describe, options } = require('yargs');

// Creamos un archivo con la configuración de yargs
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Lista la tabla de multiplicar por pantalla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta que numero multiplicar'
    })
    .check((argv, options) => {
        if( isNaN(argv.b) ){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

// Exportamos argv que es la constante
module.exports = argv;