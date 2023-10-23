/*const header = document.querySelector("header");
let isHeaderClickable = true;
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
    header.style.backgroundColor = "#FFD03A";
});
window.addEventListener ("click", function(){
    isHeaderClickable = false;
});
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    header.style.backgroundColor = "#FFD03A";
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}*/

const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}