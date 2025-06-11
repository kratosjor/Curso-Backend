import express from 'express';

const server = express();

server.use(express.json()); // Middleware para parsear JSON en el cuerpo de las peticiones

let frase = "Las rosas son rojas";

server.get("/api/frase", (req, res) => {
    res.json({ frase })
});

server.get("/api/frases/:pid", (req, res) => {
    const pid = parseInt(req.params.pid);

    const palabras = frase.split(" ");

    if (palabras.length < pid + 1) {
        return res.status(400).json({ error: "position not found", pos: pid })
    }

    const buscada = palabras[pid];
    res.json({ buscada });

});

server.post("/api/frase", (req, res) => {
    const {palabra} = req.body
    const palabras = frase.split(" ");
    frase.push(palabra);
    const position = palabras[palabras.length - 1];

    const response = { agregada: palabra, pos: frase.length -1};
    res.json(response);
});

server.put("/api/frases/:pos", (req, res) => { });

server.delete("/api/frases/:pos", (req, res) => { });

server.listen(5000, () => console.log('listening on port 5000'))