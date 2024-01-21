let precio = 400000;
let total =0;
let precioSpan=0;
let totalSpan=0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


let botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        cantidadSpan = document.querySelector(".cantidad");
        total = Number(cantidadSpan.innerHTML) * precio;
        totalSpan = document.querySelector(".valor-total");
        totalSpan.innerHTML=total;
    });
});

