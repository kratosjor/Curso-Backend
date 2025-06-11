//npm init --yes, es para inicializar el proyecto
// npm install express, es para instalar el framework express

const express = require('express');
const {users} = require('./utils.js'); // Importamos el array de usuarios desde el archivo users.js
const { request } = require('http');

const server = express();


server.get('/', (request, response) => {
    response.send("oli mundo");
});


server.get('/welcome', (request, response) => {
    const elementHtml = '<h2 style="color:blue">Bienvenido Usuario</h2>';
    response.send(elementHtml);
});


/*server.get('/users', (request, response) => {
    const fakeUser ={
        name: 'John Doe',
        age: 30,
        email: 'correo@correo.com'
    };
    response.json(fakeUser);
});*/


//query parameters
server.get('/users', (request, response) => {
    console.log(request.query); // Muestra los parámetros en consola
    const { gender } = request.query; // Extrae el parámetro

    let usersResponse;

    if (gender) {
        if (gender === "m") { // Si el parámetro es "m"
            usersResponse = users.filter(u => u.gender === "male"); // Filtra por "male"
        } else if (gender === "f") { // Si el parámetro es "f"
            usersResponse = users.filter(u => u.gender === "female"); // Filtra por "female"
        } else {
            usersResponse = users; // Si el parámetro existe pero no es "m" ni "f", devuelve todos
        }
        return response.json(usersResponse);
    }
    
    // Si no hay parámetro 'gender', o si el parámetro 'gender' no es "m" ni "f" y se llega a este punto,
    // se devuelve la lista completa de usuarios.
    response.json(users);
});



server.get('/users/:id', (request, response) => {
    const {id} = request.params;
    
    const user = users.find(u => u.id === parseInt(id))
    console.log("El id del usuario a encontrar es:", id);
    if (!user) {
        return response.status(404).send('User not found');
    }
    
    response.json(user);
});

//CRUD




server.listen(8080, () => {
    console.log('Listening on port 8080');
});