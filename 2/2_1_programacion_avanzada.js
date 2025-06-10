//DINAMIDIDAD EN JAVASCVRIPT

async function CargarOperacionesMatematicas(){
    try {
        const modulo = await import('./operaciones_matematicas.js')

        //usar las funciones del modulo
        console.log(modulo.sumar(5,3))
        console.log(modulo.restar(5,3))
        console.log(modulo.multiplicar(5,3))
        console.log(modulo.dividir(5,3))
    }catch (error) {
        console.error("Error en la lcargade un modulo", error)
    }
}

//ejecutar la funcion para cargar el modulo dinamicamente
CargarOperacionesMatematicas()

//APLANADO DE ARRAY

const array = [1,[2,[3,4],5],6]
console.log(array)

const arrayAplanado = array.flat(2) 
console.log(arrayAplanado)

/*DESAFIO DE CODIFICACION*/
console.log("Desafio de codificacion")

function duplicarNumeros(numeros){
    //usamos para crear un nuevo array con los numeros duplicados
    const numerosDuplicados = numeros.map(numero => numero * 2)

    return numerosDuplicados
}

const resultado = duplicarNumeros([1,2,3,4,5])
console.log(resultado) // [2,4,6,8,10]

