// Ejercicio 1: Utilizacion de ES9 - ES6
// Realizar una lista nueva (array) que contenga todos los tipos de productos(no cantidades),
// consejo:utilizar object.keys y array.include. Mostrar el array por consola.
// Posteriomente, obtener el total de productos vendidos por todos los objetos(utilizar object,value)

const objetos = [
    {
    manzanas:3,
    peras:2,
    carne:1,
    jugos:5,
    dulces:2
},
{
    manzanas:1,
    sandias:1,
    huevos:6,
    jugos:1,
    panes:4
}
]

//nuevoArray = ["manzanas", "peras", "carne", "jugos", "dulces", "sandias", "huevos", "panes"];

//de esta manera no es necesario hacer un nuevo array, ya que se puede utilizar Object.keys para obtener las claves de los objetos
console.log("1. Mostrar el array por consola");
//de esta manera se obtiene un array con las claves de los objetos
//console.log(Object.keys(objetos[0]));


let nuevoArray = Object.keys(objetos[0]);
let nuevoArray2 = Object.keys(objetos[1]);

//console.log(nuevoArray +" " + nuevoArray2)

let resultado = [...nuevoArray]; //hace una copia del array nuevoArray sin modificar el original

for (let i = 0; i < nuevoArray2.length; i++) {
    
    
    if(!resultado.includes(nuevoArray2[i])){
        resultado.push(nuevoArray2[i]);
    }
}

console.log(resultado);

//falta hacer la segunga parte del ejercicio, que es obtener el total de productos vendidos por todos los objetos