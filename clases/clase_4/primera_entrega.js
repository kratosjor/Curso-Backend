import expres from express;

const server = expres();

server.get("/api/products", (req, res) => {});
server.post("/api/products", (req, res) => {});

server.get("/api/products/:pid", (req, res) => {});
server.put("/api/products/:pid", (req, res) => {});
server.delete("/api/products/:pid", (req, res) => {});


server.post("/api/carts", (req, res) => {});
server.get("/api/carts/:cid", (req, res) => {});
server.post("/api/carts/:cid/products/:pid", (req, res) => {});


server.listen(8000, () => console.log('listening on port 8000'));