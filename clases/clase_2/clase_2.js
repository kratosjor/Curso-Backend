// Variables y tipos de datos en JavaScript
//ETMASCRITPS SE PUSO DE ACUERDO DE NO USAR MAS VAR

var cadena = "Hola, soy una cadena de texto";
const cadenaConst = "Hola, soy una cadena de texto constante";
let cadenaLet = "Hola, soy una cadena de texto let";


const miFuncion = ()=>{
    console.log("arrow function");
}

class Persona {}

//import modulos
//import express from 'express';

const textoLargo = "Este es mi texto largo y les voy a mostrar como funciona\nAnteriormente no se podia hacer de otra forma"
//\n es un salto de linea


const textoWithTemplate = `este es mi texto con template string y
no ncesito de magias ni trucos para hacer saltos de linea`

let message = "Hola, soy Jordan"
const responseSintemplate = message + ", este es mi nombre sin template string"
const responseContemplate = `${message}, este es mi nombre con template string`
console.log(responseSintemplate);
console.log(responseContemplate);


//DESTRUCTURACION DE OBJETOS
const datos = {
    name: "Jordan",
    age: 34,
    email: "correo@correo.com",
    pets: ['cat', 'dog'],
    dni: 12345678,
}

const {name} = datos; // Extrae la propiedad name del objeto datos

name
console.log(name); // Jordan

console.log("Hola como estan, mi nombre es " + name)

const {name: nombre} = datos; // Extrae la propiedad nombre del objeto datos y la renombra a name
console.log("Hola como estan, mi nombre es " + nombre)

const {name: nombre2, age, ...others} = datos; // Extrae la propiedad nombre2 y age del objeto datos y renombra a name, age y guarda el resto de las propiedades en others
console.log("Hola como estan, mi nombre es " + nombre2 + " y tengo " + age + " años");
console.log(others); 

//body

const body = {
    method: "POST",
    host: "127.0.0.1",
    header: {},
    body: {
        nombre: "Jordan",
        apellido: "Gonzalez",
        edad: 34,
        email: "correo@correo.com",
        contrasena: "12345678",
        cursos: [
            {
                nombre: "JavaScript",
                duracion: "3 meses",
                profesor: "Juan Perez"
            },
            {
                nombre: "Python",
                duracion: "4 meses",
                profesor: "Maria Lopez"
            }
        ],
        credenciales: { // <- faltaba una coma antes de esta línea
            tipo: "Estudiante",
            institucion: "ETMASCRITPS",
            matricula: "2023-01-01"
        }
    }
};



function procesorCuerpoPeticion(request){
    const {email, contrasena, ...datosDelusuario} = request.body; // saca las propiedades email y contrasena del objeto body
    console.log(email. contrasena);
    console.log("Sesion iniciada con exito");
    console.log("Registrando Datos");
    console.log(datosDelusuario);
}   

procesorCuerpoPeticion(body); // Llama a la funcion procesorCuerpoPeticion y le pasa el objeto body como parametro

//CALLBACKS
// Un callback es una funcion que se pasa como parametro a otra funcion y se ejecuta cuando la funcion que la recibe termina su ejecucion
// En este caso, se utiliza el metodo forEach para recorrer un array y ejecutar una funcion por cada elemento del array

const listadoFrutas = [
    "manzana",
    "pera",
    "naranja",
    "banana",
    "kiwi"
];

//listadoFrutas.forEach((fruta) => console.log(fruta)); // Recorre el array listadoFrutas y muestra cada fruta por consola

function consologearItem(item){
    console.log(item);
}
listadoFrutas.forEach(consologearItem); // Recorre el array listadoFrutas y muestra cada fruta por consola utilizando una funcion callback

// el forech es como un for, pero mas sencillo de usar
for (let i = 0; i < listadoFrutas.length; i++){
    consologearItem(listadoFrutas[i]); // Recorre el array listadoFrutas y muestra cada fruta por consola utilizando una funcion callback
}

//filter

function filtrarManzana(item){
    if(item !== "manzana") return item;
    if(item === "manzana") return undefined; // Si el item es "manzana", no lo devuelve 
}

const listadoFiltrado = listadoFrutas.filter(filtrarManzana); // Filtra el array listadoFrutas y devuelve un nuevo array con las frutas que no son "manzana"

console.log({listadoFiltrado})


//SINCRONISMO VS ASINCRONISMO
// Sincronismo: El codigo se ejecuta de forma secuencial, una vez que termina una linea de codigo, se ejecuta la siguiente
// Asincronismo: El codigo se ejecuta de forma concurrente, es decir, se pueden ejecutar varias lineas de codigo al mismo tiempo
// En JavaScript, el asincronismo se maneja con callbacks, promesas y async/await

// Ejemplo de asincronismo
console.log("Sincronismo: ")
console.log("Oli ke ace");
numeros = [1,2,3,4]
numeros.forEach(element => {
    console.log(element * 5);
})

console.log("Fin del script")

function OperacionSincronica(){
    const inicio = Date.now(); // Obtiene el tiempo actual en milisegundos
    while (Date.now() - inicio < 1000) { // Espera 2 segundos
        // Simula una operacion que tarda 2 segundos
    }
    console.log("Operacion Sincronica finalizada");
}

console.log("Inicio Tiempo:")
OperacionSincronica(); // Llama a la funcion OperacionSincronica y espera a que termine su ejecucion
console.log("Fin Tiempo: ")


console.log("Asincronismo: ")
function OperacionAsincronica(){
    setTimeout(() => {
        console.log("Operacion Asincronica");
    }, 1000); // Espera 2 segundos y luego ejecuta la funcion
}


console.log("Inicio Tiempo:")
OperacionAsincronica(); // Llama a la funcion OperacionAsincronica y no espera a que termine su ejecucion
//y la introducira cuando este terminada al final del ciclo de eventos
console.log("Fin Tiempo: ")


