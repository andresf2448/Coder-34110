// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1700 },
// ];

//find, filter, map, some
// realizar una función que al pasar el nombre del producto por parámetro diga si este existe o no

// const buscar = (nombre) => {
//   let producto = productos.find((item) => item.nombre === nombre);
  
//   if(producto){
//     let mensaje = `
//       id: ${producto.id}
//       Nombre: ${producto.nombre}
//       Precio: ${producto.precio}
//     `;

//     alert(mensaje);
//   }else{
//     alert("producto no encontrado");
//   }
// };

// let nombre = prompt("Ingrese el nombre del producto a buscar");
// buscar(nombre);

// const personas = [
//   { id: 1, nombre: "juan", edad: 20 },
//   { id: 2, nombre: "mario", edad: 37 },
//   { id: 3, nombre: "mateo", edad: 50 },
//   { id: 4, nombre: "alejandro", edad: 14 },
// ];

// const filtroEdad = (edad) => {
//   let filtrados = personas.filter(persona => persona.edad >= edad);

//   filtrados.forEach(item => {
//     let mensaje = `
//       id: ${item.id}
//       Nombre: ${item.nombre}
//       Precio: ${item.edad}
//     `;

//     alert(mensaje);
//   })
// };

// let edad = parseInt(prompt("Ingrese la edad mínima"));
// filtroEdad(edad);

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 1700 },
];

// let total = 0;

// productos.forEach(item => {
//   total += item.precio
// })

// console.log(total);

let total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(total);