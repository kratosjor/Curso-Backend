/**TIPOS DE DATOS*/
console.log("TIPOS DE DATOS")
console.log("Variables:")

const texto = "ola ke ace" //string
const edad = 34 //number
const estaVivo = true //boolean

const carnet ={
    nombre : "Juan",
    rol : "Profesor",
    cantidadAlumnosPresentes : 41,
    estanTodos : false,
    cursos : ["Backend","Frontend","DDBB"]

}

console.log(carnet) //object

const noDefinido = undefined //undefined
const nulo = null //null
const noNum = NaN //not a number


//-----------------------------------------------------------//

//var, este es el tipo de variable mas antiguo, no se recomienda su uso
var variableComun = 123;

//con "const"
const nacimiento = 1990;

//en un array se pueden modificar los valores
const cursos = ["Backend","Frontend","DDBB"]
cursos[1] = "Frontend Avanzado"
cursos.push("Diseño")
console.log(cursos) // ["Backend","Frontend","DDBB","Diseño"]
//en un objeto se pueden modificar los valores, no se puede cambiar el tipo de dato, pero si su valor


//con let
let modoEmergencia = false;
modoEmergencia = true;
console.log(modoEmergencia) //true


function crearRobot() {
    let miRobot = {};
    miRobot.nombre = "Pepineitor";
    miRobot.color = "Gris";
    miRobot.modelo = "T-800";

    console.log(miRobot);
}

crearRobot();

miRobot = {
    nombre: "Juanito",
    color: "Rojo",
    modelo: "T-1000"
}
console.log(miRobot)


//-----------------------------------------------------------//
//CLASES
console.log("CLASES")

class credencial_estudiante{
    constructor(cid,nombre, curso)
    {
        this.cid = cid
        this.nombre = nombre
        this.curso = curso
    }
    //metodo para mostrar la credencial
    getInfo(){
        return `El alumno ${this.nombre} con el cid ${this.cid} esta cursando ${this.curso}`
    }
}

const estudiante1 = new credencial_estudiante(12345,"Pepito","Programacion Avanzada")
console.log(estudiante1) // {cid: 12345, nombre: "Pepito", curso: "Progrmacion Avanzada"}

const estudiante2 = new credencial_estudiante(421245,"Anita","Backend")
console.log(estudiante2)
console.log(estudiante2.getInfo()) // El alumno Anita con el cid 421245 esta cursando Backend

//-----------------------------------------------------------//
//Ejercicio1

class contador {
    static globalCount = 0; // Contador de instancias, sera solo accedida desde contador

    constructor(nombreResponsable){
        this.responsable = nombreResponsable;
        this.count = 0;
    }
    contar(){
        this.count++;
        contador.globalCount++;
    }
    getResponsable(){
        return `El responsable del contador es ${this.responsable}`
    }
    getCuentaIndividual(){
        return `El contador individual es ${this.count}`
    }
    getCuentaGlobal(){
        return `El contador global es ${contador.globalCount}`
    }
}

const responsable1 = new contador("Shrek");
console.log(responsable1) // {responsable: "Juanito", count: 0}

const responsable2 = new contador("Chespirito");
console.log(responsable2)

const responsable3 = new contador("RonDamon");
console.log(responsable3)

console.log("Contador Global: ")
responsable1.contar()
console.log(responsable1.getCuentaGlobal())

responsable2.contar()
console.log(responsable2.getCuentaGlobal())

responsable3.contar()
console.log(responsable3.getCuentaGlobal())

console.log(contador)

console.log(responsable1.getCuentaIndividual())
console.log(responsable2.getCuentaIndividual())
console.log(responsable3.getCuentaIndividual())
console.log(responsable1.getCuentaGlobal())
console.log(responsable2.getCuentaGlobal())
console.log(responsable3.getCuentaGlobal())
