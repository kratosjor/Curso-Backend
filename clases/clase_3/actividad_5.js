import fs from 'fs'; // Volvemos a utilizar fs, sin él, no podemos trabajar con archivos.

// Escribimos en el archivo
fs.writeFile('./ejemploCallback.txt', 'Hola desde Callback', (error) => {
    if (error) return console.log('Error al escribir el archivo');

    // Leemos el archivo después de escribir
    fs.readFile('./ejemploCallback.txt', 'utf-8', (error, resultado) => {
        if (error) return console.log('Error al leer el archivo');
        console.log(resultado); // Muestra: "Hola desde Callback"

        // Añadimos contenido al archivo
        fs.appendFile('./ejemploCallback.txt', '\nMás contenido', (error) => {
            if (error) return console.log('Error al actualizar el archivo');

            // Leemos nuevamente para verificar los cambios
            fs.readFile('./ejemploCallback.txt', 'utf-8', (error, resultado) => {
                if (error) return console.log('Error al leer el archivo');
                console.log(resultado); // Muestra: "Hola desde Callback\nMás contenido"

                // Eliminamos el archivo
                fs.unlink('./ejemploCallback.txt', (error) => {
                    if (error) return console.log('No se pudo eliminar el archivo');
                });
            });
        });
    });
});

console.log("Fin del Script.");