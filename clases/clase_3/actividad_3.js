/**El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
 */

import moment from "moment";

const currentDate = moment();
const myBirthday = moment("1990-12-11");

if(myBirthday.isValid()) console.error("Fecha de cumpleaños no válida");

const diffDate = currentDate.diff(myBirthday, 'days'); 

console.log("Tu nacimiento ocurrio hace " + diffDate + " dias");


