
fetch("data/productos.json")
.then(respuesta => respuesta.json())
.then(productos => {

    const contenedor = document.getElementById("productos");

    window.listaProductos = productos;

    productos.forEach(producto => {

        contenedor.innerHTML += `

        <div class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

            <p>$${producto.precio}</p>

            <button onclick="agregarCarrito(${producto.id})">
                Añadir al carrito
            </button>

        </div>

        `;

    });

});

function agregarCarrito(id){

    const producto =
    window.listaProductos.find(
        p => p.id === id
    );

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito");

}
