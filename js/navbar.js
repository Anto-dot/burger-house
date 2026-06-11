const menu = document.getElementById("navbar");

menu.innerHTML = `
<nav>
<h2>Burger House 🍔</h2>

<ul>
<li><a href="index.html">Inicio</a></li>
<li><a href="login.html">Login</a></li>
<li><a href="registro.html">Registro</a></li>
<li><a href="#" id="logout">Cerrar Sesión</a></li>
</ul>
</nav>
`;

const logout = document.getElementById("logout");

if(logout){
logout.addEventListener("click", function(){

window.location.href="login.html";

});
}
