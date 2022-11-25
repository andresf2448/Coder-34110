// let nombre = "pepito";
// let edad = 45;
// let direccion = "AV";

/* 
estructura de los objetos

{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona1 = {
//   nombre: "pepito", 
//   edad: 45,
//   direccion: "AV"
// };

// const persona2 = {
//   nombre: "pepita", 
//   edad: 40,
//   direccion: "AV1"
// };

// console.log(persona1.direccion);
// console.log(persona1.nombre);
// console.log(persona1.edad);

// let valor = "nombre";
// console.log(persona2[valor]);
// console.log(persona2["edad"]);
// console.log(persona2["direccion"]);

// persona2.edad = 50;
// persona2["direccion"] = "AV20";

// console.log(persona2);

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);

// function Persona(info){
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   edad: 456,
//   nombre: "pepito",
//   direccion: "AV"
// });

// const objeto = {
//   nombre: 234,
//   edad: 23423
// }

// objeto.nombre = 5;

// function Producto(nombre, img, precio){
//   this.nombre = nombre;
//   this.img = img;
//   this.precio = precio;
// }

// const producto1 = new Producto("Yamaha Xt660r", "http>asdf/lashdflak;sdfh", 42220000);
// const producto2 = new Producto("Yamaha Xt660r", "http>asdf/lashdflak;sdfh", 42220000);

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {return `hola soy ${this.nombre}`}
// }

// const persona1 = new Persona("pepito", 45, "AV");

// for(const propiedad in persona1){
//   console.log(persona1[propiedad]);
// }

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {return `hola soy ${this.nombre}`}
// }

/* class Persona{
  constructor(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    return `hola soy ${this.nombre}`;
  }
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
console.log(persona1.hablar()); */

// class Producto{
//   constructor(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender(){
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("monitor", 1234);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto{
  constructor(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1;
  }
}

const producto1 = new Producto("monitor", 1234, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
