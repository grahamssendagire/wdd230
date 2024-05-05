const hamburgerElement = document.querySelector('#myButton');
const navElement= document.querySelector('.menuLinks');
hamburgerElement.addEventListener('click',()=>{
    navElement.classList.toggle('open');
});

//function toggleMenu() {
    //var menu = document.querySelector('.menu');
    //menu.classList.toggle('show-menu');
//}

//function closeMenu() {
    //var menu = document.querySelector('.menu');
    //menu.classList.remove('show-menu');
//}