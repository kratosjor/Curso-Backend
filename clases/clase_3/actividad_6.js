import fs from 'fs';

// Función asincrónica principal
const operacionesAsincronas = async () => {
    try {
        // Escribimos un archivo
        await fs.promises.writeFile('./ejemploPromesa.txt', 'Hola desde promesa!');

        // Leemos el archivo
        let resultado = await fs.promises.readFile('./ejemploPromesa.txt', 'utf-8');
        console.log(resultado); // Veremos: "Hola desde promesa!"

        // Modificamos el archivo (agregamos contenido)
        await fs.promises.appendFile('./ejemploPromesa.txt', ' Contenido adicional');

        // Volvemos a leer el archivo para ver los cambios
        resultado = await fs.promises.readFile('./ejemploPromesa.txt', 'utf-8');
        console.log(resultado); // Veremos: "Hola desde promesa! Contenido adicional"

        // Finalmente, borramos el archivo
        await fs.promises.unlink('./ejemploPromesa.txt');
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
};

// Ejecutamos la función
operacionesAsincronas();
