const formulario =
document.getElementById("formLogin");

formulario.addEventListener("submit",function(e){

e.preventDefault();

sessionStorage.setItem(
"usuario",
"Antonella"
);

window.location.href="index.html";

});
