const botonesMas = document.querySelectorAll(".mas");
const botonesMenos = document.querySelectorAll(".menos");

botonesMas.forEach(boton=>{

boton.addEventListener("click",()=>{

let cantidad = boton.previousElementSibling;

cantidad.textContent =
parseInt(cantidad.textContent)+1;

});

});

botonesMenos.forEach(boton=>{

boton.addEventListener("click",()=>{

let cantidad = boton.nextElementSibling;

if(parseInt(cantidad.textContent)>1){

cantidad.textContent =
parseInt(cantidad.textContent)-1;

}

});

});
