// let numero = 5;
// numero = numero + 1;
// numero += 1;
// numero++;

/* 
estructura del operador ternario

condicion ? codigo en caso de condicion verdadera : codigo en caso de condicion falsa
*/

// let edad = 16;

// if(edad >= 18){
//   console.log("podes entrar a la fiesta");
// }else{
//   console.log("No puedes entrar a la fiesta");
// }

// edad >= 18 ? console.log("podes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

/* let permiso;
let usuario = {
  nombre: "camilo",
  edad: 15
};

if(usuario.edad >= 18){
  permiso = true;
}else{
  permiso = false;
}

if(permiso){
  console.log("podes entrar a la fiesta");
}else{
  console.log("No puedes entrar a la fiesta");
} */

// let usuario = {
//   nombre: "camilo",
//   edad: 15
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("podes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

/* 
operador1 && operador2 si operador1 representa algo verdadero entonces retorna operador2 del contrario      retorna operador1

operador1 || operador2 si el operador1 representa algo falso entonces retorna operador2 de lo contrario retorna operador1
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("el carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacio");

// console.log( 0 || "Falsy") // falsy
// console.log( 40 || "Falsy")  //40
// console.log( null || "Falsy") //falsy
// console.log( undefined || "Falsy")  //falsy
// console.log( "Hola Mundo" || "Falsy")  //hola mundo
// console.log( "" || "Falsy")  // falsy
// console.log( NaN || "Falsy")  // falsy
// console.log( true || "Falsy")  // true
// console.log( false || "Falsy") // falsy

// const usuario1 = {
//   nombre: "andres",
//   edad: 15
// };

// const usuario2 = null;

// // console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if(carritoStorage){
//   carrito = carritoStorage;
// }else{
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "andres",
//   edad: 45,
//   telefonos: null
// }

// console.log(usuario?.telefonos?.casa || "la propiedad no existe");

// let usuario = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
//   telefono: {
//     celular: 654654,
//     casa: 5684654,
//     trabajo: 65498,
//   },
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = usuario.direccion;

// let {
//   nombre: namePerson,
//   edad,
//   telefono: { trabajo },
// } = usuario;
// console.log(namePerson, edad);
// console.log(trabajo);

/* let usuario = {
  nombre: "pepito",
  edad: 34,
};

const desestructurar = ({ nombre, edad }) => {
  console.log(nombre, edad);
};

desestructurar(usuario); */

// const nombres = ["camila", "sofi", "andres", "camilo", "mateo"];

// const [a, b, , c] = nombres;
// console.log(a, b, c);

/* let persona1 = "pepito";
let persona2 = persona1;

persona2 = "marian";

console.log(persona1); */

// let persona1 = {nombre: "pepito", edad: 45};
// let persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);
// console.log(persona2);

// const nombres = ["camila", "sofi", "andres", "camilo", "mateo"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [1, 2, 4, 5, 34, 6, 999, 23, 2];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const usuario1 = {
//   nombre: "camila",
//   edad: 24,
// };

// const usuario2 = {
//   ...usuario1,
//   direccion: "AV",
//   edad: 35
// };

// console.log(usuario2);

function sumar(...numeros) {
  return numeros.reduce((acum, numero) => acum + numero, 0);
}

console.log(sumar(3, 2, 4, 6, 7, 9, 10));
