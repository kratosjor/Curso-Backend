import fs from 'fs';

class UserManager{
    
    static async createUser(userObject){
        const { nombre, edad, curso } = userObject;
        const users = await UserManager.getUsers();

        users.push({nombre, edad, curso})

        const json = JSON.stringify(users, null, 2);
        await fs.promises.writeFile("./users.json", json);
        console.log("Usuario creado correctamente.\n");
        
    }
    static async getUsers(){
        try {
            const json = await fs.promises.readFile("./users.json", "utf-8");
            return JSON.parse(json);
        } catch (error) {
            await fs.promises.writeFile("./users.json","[]");
            return [];
        }

    }
}

const main = async () => {
    console.log("Creando usuarios...");
    await UserManager.createUser({nombre:"John Connor",edad: 30,curso: "Node.js Avanzado"});
    await UserManager.createUser({nombre:"Sarah Connor",edad: 45,curso: "Node.js Básico"});
    await UserManager.createUser({nombre:"Kyle Reese",edad: 23,curso: "Node.js Intermedio"});
    console.log("Usuarios creados correctamente.");}

main()
