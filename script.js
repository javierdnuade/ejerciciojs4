const botonClaro = document.querySelector('#light');
const botonOscuro = document.querySelector('#dark');
const body = document.querySelector('body')
const menu = document.querySelector('nav')
const navbar = document.querySelector('.navbar')

botonOscuro.addEventListener('click', () => {
    body.style.backgroundColor  = 'rgba(0, 0, 0, 0.938)';
    body.style.transition = '0.4s';

    body.classList.add('element-light'); //Los elementos tienen que estar blancos
    body.classList.remove('element-dark');

    botonOscuro.classList.add('dark'); //Funcionalidad de botones
    botonClaro.classList.remove('light');
})

botonClaro.addEventListener('click', () => {
    body.style.backgroundColor  = 'rgba(225, 237, 240, 0.938)';
    body.style.transition = '0.4s';

    body.classList.add('element-dark'); //Los elementos tienen que estar en negrita
    body.classList.remove('element-light');

    botonClaro.classList.add('light'); //Funcionalidad de botones
    botonOscuro.classList.remove('dark');
})

document.addEventListener("DOMContentLoaded", function() {
    // Obtén el color de fondo del body
    const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

     // Verifica si el color de fondo es blanco o rgba(0, 0, 0, 0.938)
     if (bodyBackgroundColor === 'rgb(255, 255, 255)') {
        // Aplica sombra negra a la navbar
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    }
});

const divs = document.querySelectorAll('div');

        // Asigna un estilo de fondo a cada div
        divs.forEach(div => {
            div.classList.add(' background-black');
        });