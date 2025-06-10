import fs from "fs";

// 1. Escribimos un archivo nuevo o lo sobreescribimos si ya existe
fs.writeFileSync("./ejemplo1.txt", "Hola, Coders, estoy en un archivo!");

// 2. Verificamos si el archivo existe
if (fs.existsSync("./ejemplo1.txt")) {
    // 3. Leemos el contenido del archivo (codificado en UTF-8)
    let contenido = fs.readFileSync("./ejemplo1.txt", "utf-8");
    console.log(contenido);

    // 4. Añadimos más contenido al archivo
    fs.appendFileSync("./ejemplo1.txt", "\n-------Más contenido!--------");

    // 5. Volvemos a leer el archivo para ver el nuevo contenido
    contenido = fs.readFileSync("./ejemplo1.txt", "utf-8");
    console.log(contenido);

    // 6. Podrías eliminar el archivo si quisieras (comentado por ahora)
    // fs.unlinkSync("./ejemplo1.txt");
} else {
    console.log("ERROR: no existe el archivo :(");
}
