//PROMESAS
// Una promesa es un objeto que representa el resultado de una operacion asincronica

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(divisor === 0)reject("No se puede dividir por cero");
            resolve (dividendo / divisor);
        },0);
    })
}

const resultadoPromesa = dividir(10,0)
//then/catch
console.log(resultadoPromesa); // Muestra el objeto Promise
resultadoPromesa
    .then((resultado)=> console.log(resultado))
    .catch((error)=> console.error(error))
console.log("Fin del script con promesa");

// ASYNC/AWAIT

const main = async () => {
    try {
        console.log("Inicio del script con async/await");
        const resultadoPromesa1 = await dividir(10, 5); // usa await
        console.log("Resultado:", resultadoPromesa1);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("Fin del script con async/await");
    }
};

main();