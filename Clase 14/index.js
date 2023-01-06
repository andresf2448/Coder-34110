// setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("actuando");
// }, 2000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 2000);

// console.log("Final");

// const boton = document.getElementById("boton");
// const mensaje = document.getElementById("mensaje");

// boton.addEventListener("click", () => {
//   mensaje.classList.add("color");

//   setTimeout(() => {
//     mensaje.classList.remove("color");
//   }, 2000);
// });

// for (let letra of "hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5); */

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 1000);

// setTimeout(() => {
//   console.log("final");
// }, 2000);

// setInterval(funcion, tiempo);
// setInterval(() => {
//   console.log("Hola");
// }, 1000);

let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);

  if (counter >= 5) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000);
