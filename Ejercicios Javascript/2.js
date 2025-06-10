/*
2) Realizar una función que almacene en un arreglo todos los números pares desde a hasta b. */

function almacenarPares(a,b){
    let pares = [];
    for ( let i = a; i <= b; i++ ){
        if ( i % 2 === 0){
            pares.push(i)
        }
    console.log(pares);
    }
}

almacenarPares(1,13); 
