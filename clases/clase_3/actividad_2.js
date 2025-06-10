/*¿Cómo lo hacemos? Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar el módulo nativo crypto.
El manager debe contar con los siguientes métodos:
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Nombre de usuario
Contraseña
El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que la contraseña debe estar hasheada por seguridad*/

import crypto from 'crypto';
//crypto sirve para hashear la contraseña
//hash es una función que toma una entrada (o 'mensaje') y devuelve un valor fijo de longitud, que es único para cada entrada diferente. Es útil para almacenar contraseñas de forma segura.
//encriptar es convertir datos de un formato a otro para que no puedan ser leídos sin una clave o contraseña específica. Es útil para proteger datos sensibles durante la transmisión o almacenamiento.

class UserManager {
    static users = [];
    static #salt = crypto.randomBytes(16); // ← Generar un salt aleatorio una vez

    static createUser(userObject) {
        const { first_name, last_name, email, password } = userObject;

        if (UserManager.users.find(user => user.email === email)) {
            console.log("El usuario ya existe");
            return;
        }

        const hash = UserManager.#createHash(password);

        // Por buena práctica se hace una copia del objeto para no modificar el original
        const newUser = {
            first_name,
            last_name,
            email,
            password: hash  // ← Usar el hash en vez de la contraseña original
        };

        UserManager.users.push(newUser);
        console.log("Usuario creado correctamente.\n");
    }

    static getUsers() {
        console.log(UserManager.users);
    }

    static login(email, password){
        const userFound = UserManager.users.find(user => user.email === email);

        if(!userFound){
            console.log("Usuario no encontrado");
            return;
        }
        const result  = UserManager.#ValidatePassword(password, userFound);

        if(result){
            console.log("Usuario Logeados");
        }
        else{
            console.log("Contraseña incorrecta");
        }
    }

    static #createHash(password, user) {
        const digest = "sha256"; // ← Corregido (sin guion)
        
        const hash = crypto.pbkdf2Sync(password, UserManager.#salt, 50, 33, digest);
        return hash.toString('hex');
    }

    static #ValidatePassword(password, user){
        const digest = "sha256";
        const hash = crypto.pbkdf2Sync(password, UserManager.#salt,50, 33, digest).toString('hex');
        if(hash === user.password){
            
            return hash === user.password;
        }
    }
}

// Ejemplo de uso
UserManager.createUser({
    first_name: "John",
    last_name: "Connor",
    email: "terminator@correo.com",
    password: "Skynet1997"
});


UserManager.createUser({
    first_name: "Kyle",
    last_name: "Rise",
    email: "exterminador@correo.com",
    password: "cyberdine2029"
});

UserManager.getUsers();

UserManager.login("terminator@correo.com", "Skynet1997");