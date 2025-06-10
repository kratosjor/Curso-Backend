/*
1) Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido que mande un error personalizado a la consola.*/

function ejercicioUno(a,b, operacion){
    switch(operacion){
        case "suma":
            return console.log(a + b);
            
        case "resta":
            return console.log(a - b);
            
        case "multiplicacion":
            return console.log(a * b);
            
        case "division":
            if(b ===0){
                return console.error("No se puede dividir entre 0");
            }
            return console.log(a / b);
            
        default:
            console.error("Operacion no valida, por favor ingrese una de las siguientes: suma, resta, multiplicacion o division");
    }
}

//ejecucion de funciones


ejercicioUno(8,5, "suma");  
ejercicioUno(8,5, "resta");
ejercicioUno(8,5, "multiplicacion");
ejercicioUno(8,5, "division");
ejercicioUno(8,0, "division");
ejercicioUno(8,5, "potencia");
