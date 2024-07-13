const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navegacion__menu');
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


//se configura la funcion para el toggle del menu mobile
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//se configura el toggle del modo oscuro
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'white';
        body.style.transition = '2s';
    }else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

    }
});
