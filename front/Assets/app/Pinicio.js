

const carusel_hijo = document.querySelector('.carusel_hijo');;
const caruselAnt = document.querySelector('.carusel_ant');
const caruselDesp = document.querySelector('.carusel_desp');
const indicadores = document.querySelectorAll('.carusel_indicadores button');


let imgActual = 1;

indicadores[0].classList.add('active');

caruselAnt.addEventListener('click', () => {
    imgActual--;
    if (imgActual < 1) {
        imgActual = 3;
    }
    actualizarCarusel();
});

caruselDesp.addEventListener('click', () => {
    imgActual++;
    if (imgActual > 3) {
        imgActual = 1;
    }
    actualizarCarusel();
});

indicadores.forEach((indicadores, i) => {
    indicadores.addEventListener('click', () => {
        imgActual = i + 1;
        actualizarCarusel();
    });
});

function actualizarCarusel() {
    carusel_hijo.style.transform = `translateX(-${(imgActual - 1) * 100}%`;

    indicadores.forEach(indicadores => {
        indicadores.classList.remove('active');
    });
    indicadores[imgActual- 1].classList.add('active');
}
