//setItem guardar un par en el storage
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", true);

//getItem recupera un valor del storage
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// localStorage.setItem("objeto", { nombre: "camila", edad: 40 });
// localStorage.setItem("arreglo", [1, 2, 3, 4, 5]);

// sessionStorage.setItem("edad", 45);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("clave ", clave);
//   console.log("valor ", localStorage.getItem(clave));
// }

//eleminar datos del storage
// localStorage.removeItem("nombre");
// localStorage.clear();

// let objeto = { nombre: "camila", edad: 40 };

// localStorage.setItem("objeto", JSON.stringify(objeto));
// localStorage.setItem("arreglo", JSON.stringify([1, 2, 3, 4, 5]));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let arreglo = JSON.parse(localStorage.getItem("arreglo"));
// console.log(arreglo);

// let favoritos = [
//   "camisa",
//   "pantalon"
// ];

// localStorage.setItem("favoritos", JSON.stringify(favoritos));

// let favoritos = JSON.parse(localStorage.getItem("favoritos"));
// let lista = document.getElementById("lista");

// favoritos.forEach(favorito => {
//   let li = document.createElement("li");
//   li.innerHTML = favorito;
//   lista.append(li);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

/* const guardar = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

productos.forEach(producto => {
  guardar(producto.id, JSON.stringify(producto));
}); */

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");
// console.log(usuarioStorage);

// if(usuarioStorage){
//   usuario = usuarioStorage;
//   let mensaje = `Bienvenido ${usuario}`;
//   alert(mensaje);
// }else{
//   usuario = prompt("Ingrese su nombre");
//   sessionStorage.setItem("usuario", usuario);
//   let mensaje = `Eres nuevo, bienvenido ${usuario}`;
//   alert(mensaje);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
let carritoStorage = localStorage.getItem("carrito");
let boton = document.getElementById("eliminar");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "carrito vacio";

  document.body.append(div);
}

carrito.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    <button>Eliminar</button>
  `;

  document.body.append(div);
});

boton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
