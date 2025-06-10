// 4) Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100.

function filtrarMultiplosDeTres() {
    let multiplos = [];
    for (let i = 1 ; i <= 100; i++){
        if (i % 3 == 0){
            multiplos.push(i)
        }
    }
    console.log(`Los multiplos de 2 del numero 1 al 100, son: ${multiplos}`);
}

filtrarMultiplosDeTres();