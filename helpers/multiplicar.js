// importaciones necesarias
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++) {
            // Esta linea es pura y es la que se nos guarda en el txt
            salida += `${base} x ${i} = ${base * i}\n`;
            // Esta linea es con colores para que por consola quede bien
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`;
        }

        // De esta forma nos va a crear un archivo con el path que le digamos y con el archivo que le indiquemos
        const nombreArchivo = fs.writeFileSync( `./salida/tabla-${base}.txt`, salida); 

        if (listar) {
            console.log('================='.green);
            console.log(`   Tabla del`.green ,colors.blue(base));
            console.log('================='.green);

            console.log(consola);
        }

        return `tabla-${base}.txt`;
    } catch (err) {

        err = 'El archivo no se creo correctamente';
        throw err;
    }

}

// Esta es la forma de exportar archivos con node.js
module.exports = {
    crearArchivo: crearArchivo
}