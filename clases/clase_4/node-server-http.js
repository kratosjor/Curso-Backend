const http = require('http');

// Crea un servidor HTTP que responde con un mensaje
const server = http.createServer((request, response) => {
    response.end("Mi primer oli desde backend.")
})


// Inicia el servidor en el puerto 8080
server.listen(8080, () => console.log("Listening on port 8080"));
//se accde al servidor desde el navegador con la url http://localhost:8080


