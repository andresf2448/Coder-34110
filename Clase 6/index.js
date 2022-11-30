// const arreglo1 = [];
// const numeros = [1, 4, 6, 10, 977];
// const nombres = ["camila", "andres", "sofi"];
// const valores = [false, true, true];
// const variados = ["mariana", true, 4];

// const nombres = ["camila", "andres", "sofi"];
// console.log(nombres[1]);
// console.log(nombres[2]);

// const nombres = ["camila", "andres", "sofi", "melisa", "juan"];

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

// const nombres = ["camila", "andres", "sofi"];
// nombres.push("melisa"); //agregamos elementos al final
// nombres.unshift("juan"); //agregamos elementos al principio

// console.log(nombres);

// const nombres = ["camila", "andres", "sofi"];
// nombres.pop(); // quitar elementos del final
// nombres.shift(); // quitar elementos del inicio

// console.log(nombres);

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// nombres.splice(1, 1); //para elminar uno o varios elementos de un arreglo
// console.log(nombres);

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// console.log(nombres.join("***")); //generar un string con todos los elementos separados por el valor pasado por parámetro

// const nombres = ["Rita", "Pedro", "Miguel"];
// const animales = ["zeus", "max", "firu"];
// const varios = animales.concat(nombres); //concatena o une los arreglos

// console.log(varios);
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const fragmento = nombres.slice(1, 4); // crea una copia de un fragmento dado

// console.log(fragmento);
// console.log(nombres);

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// console.log(nombres.indexOf("Ana"));// obtiene la posicion del elemento en el arreglo

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// console.log(nombres.includes("Pedro"));// saber si un elemento se encuentra dentro del arreglo
// console.log(nombres.includes("Miguelito"));

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// nombres.reverse();

// console.log(nombres);

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if(index != -1){
//     nombres.splice(index, 1);

//     console.log(nombres);
//   }
// };

// eliminar("Ana");
/* 
const productos = [
  { id: 1, nombre: "camisa", precio: 700 },
  { id: 2, nombre: "pantalon", precio: 1350 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "correa", precio: 950 },
];

for(const producto of productos){
  console.log(producto.id);
  console.log(producto.precio);
  console.log(producto.nombre);
} */

// class Producto{
//   constructor(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// const productos = [];
// productos.push(new Producto("arroz", 45));
// productos.push(new Producto("pan", 34));

// console.log(productos);

const productos = [
  { id: 1, nombre: "camisa", precio: 700 },
  { id: 2, nombre: "pantalon", precio: 1350 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "correa", precio: 950 },
];

let nombre = prompt("Ingrese el nombre del producto a verrificar");
let identificador = false;

for (const producto of productos) {
  if (producto.nombre === nombre) {
    identificador = true;
  }
}

if (identificador) {
  alert("producto encontrado");
} else {
  alert("producto no encontrado");
}
