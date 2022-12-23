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

const usuario = {
  nombre: "andres",
  edad: 45,
  telefonos: null
}

console.log(usuario?.telefonos?.casa || "la propiedad no existe");