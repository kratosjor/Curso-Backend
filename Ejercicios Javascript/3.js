// 3) Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.

function tablaMultiplicacion(a, multiplicador = 10) {
    if(typeof a !== 'number' || typeof multiplicador !== 'number'){
        console.error("Ambos parámetros deben ser números.");
        return;
    
    }

    for (let i = 0; i <= multiplicador; i++) {
        if (i === 5) continue;
        console.log(`${a} x ${i} = ${a * i}`);
    }
}


tablaMultiplicacion(2, 15);