let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}
