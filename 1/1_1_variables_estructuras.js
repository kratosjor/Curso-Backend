/*LET*/
/*let permite ir cambiando nombre o valor de variable*/ 
let nombre = "Pepito";
nombre = "Anita";

console.log(nombre);

/*CONST*/
const apellido = "Gonzalez"; // No se puede cambiar el valor de la variable
/*apellido = "Lopez"; // Esto generará un error porque no se puede reasignar una constante*/

console.log(apellido);

/*FUNCIONES FLECHAS*/
// Las funciones flechas son una forma más concisa de escribir funciones en JavaScript
// Se definen con la sintaxis: (parametros) => { cuerpo de la función }

const saludar = ( nombre) => {
    return "Hola " + nombre;
}

console.log(saludar("Juan"));

/*fUNCION TRADICIONAL*/
function sumar (a,b){
    return a + b;
}
console.log(sumar(5, 10));

const restar = (a,b) => a - b; // Función flecha de una sola línea
console.log(restar(10, 5));

/*CONTATENACIOND DE CADENAS*/

let nombre1 = "Donatelo";
let age = 25;
console.log(nombre1 + age)
console.log("Hola " + nombre1 + " tienes " + age + " años");

console.log(`Hola ${nombre1} tienes ${age} años`); // Usando template literals
// Los template literals permiten incluir variables y expresiones dentro de cadenas de texto

let producto = "Cerveza";
let precio = 1000;

console.log(`Hola ${nombre1} estas comprando ${producto} por un precio de ${precio} pesos. `);

/*Clases*/

class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }
    emitirSonido(){
        console.log("El animal hace un sonido");
    }
} 

class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre); // Llama al constructor de la clase padre
        this.raza = raza;
    }
    emitirSonido(){
        console.log("Guau Guau");
    }
    ladrar(){
        console.log("Wof Wof!!!");
    }
}
//crear instancias de la clase
const perro1 = new Perro("Firulais","Kangal Turco")
const animalGenerico1 = new Animal("Criatura de la noche");

//acceder a los atributos
console.log(perro1.nombre);
console.log(animalGenerico1.nombre);

//aceder a los metodos
perro1.ladrar();
animalGenerico1.emitirSonido();