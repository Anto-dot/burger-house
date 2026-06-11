const carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor =
document.getElementById("carrito");

carrito.forEach(producto => {

contenedor.innerHTML += `

<div class="card">

<img src="${producto.imagen}">

<h3>${producto.nombre}</h3>

<p>${producto.descripcion}</p>

<p>$${producto.precio}</p>

<button onclick="eliminar(${producto.id})">
Eliminar
</button>

</div>

`;

});

function eliminar(id){

let carrito =
JSON.parse(localStorage.getItem("carrito"));

carrito =
carrito.filter(
producto => producto.id !== id
);

localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

location.reload();

}
