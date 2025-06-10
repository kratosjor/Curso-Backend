//MODULOS EN NODE.JS
const fs = require('fs');

// 1. crear y escribir contenido en un archivo
fs.writeFileSync('example.txt', 'Este es el contenido inicial del archivo, lokita.\n');
console.log('Archivo creado y contenido escrito.');


// 2. Leer el contenido de un archivo
const contenido = fs.readFileSync('example.txt', 'utf8');
console.log('Contenido del archivo:', contenido);

// 3. Agregar contenido al archivo
fs.appendFileSync('example.txt',"\nEste es el contenido agregado al archivo, sapbe.\n");
console.log('Contenido adicional agregado.');

console.log('Contenido actual: ', contenido)

// 4. Eliminar el archivo
fs.unlinkSync('example.txt');
console.log('Archivo eliminado exitosamente.');