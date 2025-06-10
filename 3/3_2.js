//trabajar asincrona usando promesas
const fs = require('fs').promises;

// 1. Crear y escribir contenido en un archivo
async function writeFile(){
    const data = 'Contenido para escribir en el archivo, lokita.\n';

    try {
        await fs.writeFile('archivo.txt', data);
        console.log('Archivo creado y contenido escrito.');
    }catch (error) {
        console.error('Error al escribir el archivo:', error);
    }
}

//2. agregar contenido al archivo
async function appendFile(){
    const data = 'Datos Adicionales, lokita.\n';

    try {
        await fs.appendFile('archivo.txt', data);
        console.log('Archivo modificado correctamente.');
    }catch (error) {
        console.error('Error al modificar el archivo:', error);
    }
}

// 3. Eliminar el archivo
async function unlinkFile(){
    data = 'archivo.txt'

    try {
        await fs.unlink(data);
        console.log('Archivo eliminado exitosamente.');
    } catch (error) {
        console.error('Error al eliminar el archivo:', error);
    }
}

writeFile()
appendFile()
unlinkFile()
 