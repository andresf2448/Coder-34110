// function mayorQue(n){
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); // m => m > 5;
// console.log(mayorQueCinco(4));

// function operaciones(operacion){
//   if(operacion === "sumar"){
//     return (x, y) => x + y;
//   }else if(operacion === "restar"){
//     return (x, y) => x - y;
//   }else if(operacion === "multiplicar"){
//     return (x, y) => x * y;
//   }else{
//     return (x, y) => x / y;
//   }
// }

// let suma = operaciones("sumar"); //(x, y) => x + y;
// console.log(suma(10, 5));

// let resta = operaciones("restar"); //(x, y) => x - y;
// console.log(resta(5, 6));

// const iteradora = (arreglo, funcion) => {
//   for (const item of arreglo) {
//     funcion(item);
//   }
// };

// iteradora([1, 2, 3, 4, 3, 2], console.log);

// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(item => { //forEach recorre cada uno de lso elementos
//   console.log(item);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1700 },
// ];

//find encuentra el primer elemento que cumpla la condicion
// let nombre = prompt("Ingrese el nombre del producto");
// let encontrado = productos.find(item => item.nombre === nombre);

// let mensaje = `
//   Id: ${encontrado.id}
//   Nombre: ${encontrado.nombre}
//   Precio: $${encontrado.precio}
// `;

// alert(mensaje);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1700 },
// ];

// let precio = parseInt(prompt("ingrese el precio minimo"));

// let filtrados = productos.filter((item) => item.precio > precio); //filtra los productos que cumplen la condicion

// filtrados.forEach((item) => {
//   let mensaje = `
//   Id: ${item.id}
//   Nombre: ${item.nombre}
//   Precio: $${item.precio}
// `;

//   alert(mensaje);
// });

// const numeros = [1,2,3,4,5];

// // for(const numero of numeros){
// //   console.log(numero);
// // }

// numeros.forEach(item => {
//   console.log(item);
// })

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1700 },
// ];

// let nombre = prompt("Ingrese el nombre del producto");

// if(productos.some(item => item.nombre === nombre)){
//   alert("El producto se encuentra disponible");
// }else{
//   alert("El producto no se encuentra disponible");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1700 },
// ];

// const nombres = productos.map(item => item.nombre);
// console.log(nombres);
// const precios = productos.map(item => item.precio);
// console.log(precios);

// const actualizacion = productos.map(item => { //transforma o mapea el arreglo
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio + item.precio * 0.21
//   };
// });

// console.log(actualizacion);

// const numeros = [1, 2, 3, 4, 5];

// const total = numeros.reduce((acumulador, item) => acumulador + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1700 },
// ];

// let total = productos.reduce((acum, producto) => acum + producto.precio, 0);// reduce un arreglo a un unico valor
// console.log(total);

// const numeros = [1, 3, 6, 222, 100, 5];
// console.log(numeros.sort((a, b) => a - b)); //menor a mayor
// console.log(numeros.sort((a, b) => b - a)); //mayor a menor

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(items.sort((a, b) => {
//   if (a.name > b.name) {
//     return -1;
//   }
//   if (a.name < b.name) {
//     return 1;
//   }
//   // a es igual a b
//   return 0;
// }));
