let titulo = document.getElementById("titulo_destacados");
titulo.addEventListener('mouseover', ()=>{
    titulo.style.color="grey";
});
titulo.addEventListener('mouseout', ()=>{
    titulo.style.color="black";
});

let link = document.getElementById("marcas");
let link1 = document.getElementById("marcas1");
let link2 = document.getElementById("marcas2");
let link3 = document.getElementById("marcas3");
let link4 = document.getElementById("marcas4");

link.addEventListener('click',()=>{
    window.location.href = "adidas.html";
})
link1.addEventListener('click',()=>{
    window.location.href = "dc.html";
})
link2.addEventListener('click',()=>{
    window.location.href = "nike.html";
})
link3.addEventListener('click',()=>{
    window.location.href = "puma.html";
})
link4.addEventListener('click',()=>{
    window.location.href = "vans.html";
})

document.getElementById('boton-arriba').addEventListener('click', function() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
});

function toggleColor(card) {
    if (card.style.color !== "green") {
        card.style.color = "green";
        card.style.transform = "scale(1.2)"; // Escala el botón a 1.1 veces su tamaño original
        alert('Se agrego al carrito correctamente!')
    } else {
        card.style.color = ""; // Restaura el color original del botón
        card.style.transform = ""; // Restaura la escala del botón al estado original
    }
}

var boton3 = document.getElementById("boton3");

boton3.addEventListener("click", function() {
    toggleColor(boton3);
});

