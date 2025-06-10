/*Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.
Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona. */

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

console.log("Generando números aleatorios...");
console.log(randomNum(1, 20));

/////con bucle for
const numbers = {};

for (let i = 0; i < 1000000; i++){
    const random = randomNum(1,20);
    if(!numbers[random]){
        numbers[random] = 1;

    }else{
        numbers[random]++;
    }

}

console.log("Gneracion de numeros random con FOR ", numbers)
console.log(("Fin del Script."));


//de forma asincrona con promesas

const calcularNumeros = (cantidad, min, max) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        const numbers = {};

        for (let i = 0; i < cantidad; i++) {
            const random = randomNum(min, max);
            if (!numbers[random]) {
                numbers[random] = 1;
            } else {
                numbers[random]++;
            }
        }

        resolve(numbers);
    }, 5000);
    });
};

console.log("Generando números aleatorios de forma asíncrona...");
calcularNumeros(8e7, 1, 20)
    .then((data) => console.log(data));
