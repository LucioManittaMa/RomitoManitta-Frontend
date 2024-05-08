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

link.addEventListener('',()=>{
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

