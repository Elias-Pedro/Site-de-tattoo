let titleName = document.querySelectorAll(".titleName")
for (let i = 0; i < titleName.length; i++) {
    titleName[i].innerHTML = "Ruan Fellipe"
}
let endereco = document.querySelector(".endereco")
endereco.innerHTML = "R. Quaresma Júnior, 160 - Sala 505 - Centro, Angra dos Reis - RJ, 23900-282"

let enderecoMapa = document.querySelector(".enderecoMapa")
//enderecoMapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64440159.17531167!2d-99.76709813773608!3d-9.671198649557327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1701131771472!5m2!1spt-BR!2sbr"
enderecoMapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4086447684695!2d-44.321641424686526!3d-23.008763379183378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c4fb3f1024a29%3A0x1853bc99edcfd0cd!2sBorel%20Tattoo%20Studio!5e0!3m2!1spt-BR!2sbr!4v1701196680142!5m2!1spt-BR!2sbr"



window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
var pageUp = document.querySelector(".pageUp");
var scrollPosition = window.scrollY || document.documentElement.scrollTop;

if (scrollPosition > 0.8 * window.innerHeight) {
    pageUp.style.display = "flex";
} else {
    pageUp.style.display = "none";
}
}

function whatsApp(){
    //window.open('')
}
function faceBook(){
    //window.open('')
}
function instagram(){
    //window.open('')
}
function tikTok(){
    //window.open('')
}

let shadow = document.querySelector(".shadow")
function addComentario(){
    shadow.style.display = "flex"
}
function cancelarComentario(){
    shadow.style.display = "none"

}


let btnAbrirMenu = document.querySelector(".btnAbrirMenu")
let btnFecharMenu = document.querySelector(".btnFecharMenu")
let logoHeader = document.querySelector(".logoHeader")
let itemsMenu = document.querySelector(".itemsMenu")

btnFecharMenu.style.display = "none"

function abrirMenu(){
    btnAbrirMenu.style.display = "none"
    btnFecharMenu.style.display = "flex"
    logoHeader.style.display = "none"
    itemsMenu.style.display = "flex"
}
function fecharMenu(){
    btnFecharMenu.style.display = "none"
    btnAbrirMenu.style.display = "flex"
    logoHeader.style.display = "flex"
    itemsMenu.style.display = "none"

}