//Actividad Práctica: Clases con ECMAScript y ECMAScript Avanzado

/*Métodos a Implementar

    addProduct

        Este método debe agregar un producto al arreglo de productos inicial.

        Debe validar que no se repita el campo code
         y que todos los campos sean obligatorios.

        Al agregar un producto, debe crearse con un id
         autoincrementable.

    getProducts

        Este método debe devolver el arreglo con todos los productos creados hasta el momento.

    getProductById

        Este método debe buscar en el arreglo el producto que coincida con el id
        .

        En caso de no encontrar ningún id
         coincidente, debe mostrar en consola el error "Not found".*/

class ProductManager {
    constructor(){
        this.product = []; //arreglo vacio, en python seria una lista
        this.nextId = 1; //id autoincrementable
    }

    addProduct(title, description, price, thumbnail, code, stock){
        //validar que todo sea obligatorio
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        //validar que el campo code no se repita
        const codeExists = this.product.some(product => product.code === code);
        if (codeExists){
            console.error(`El codigo ${code} ya existe. No se puede agregar el prducto.`);
            return;
        }
        //crear producto
        const newProduct = {
            id : this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,   
            stock
        };

        this.product.push(newProduct); //agregar producto al arreglo
        console.log(`Producto agregado correctamente: ${title}`);
    }

    //Este método debe devolver el arreglo con todos los productos creados hasta el momento.
    getProducts(){
        return this.product;
    }
     
    getProductByID(id){
        const product = this.product.find(product => product.id === id);
        if (!product) {
            console.error("Not found");
            return null;
        }
        return product;
    }
}

//USO DE LA CLASE
//title, description, price, thumbnail, code, stock

//1
const encargado = new ProductManager();
console.log("addProduct");
encargado.addProduct("Cerveza","Cerveza Stout", 2000, "ruta/imagen", 2,30);

//2
console.log("getProducts");
console.log(encargado.getProducts());

//3
console.log("getProductByID");
console.log(encargado.getProductByID(1));