const images = document.querySelectorAll('.carousel-image');
const textElement = document.getElementById('carousel-text');
const texts = [
  'Doña María creció entre cafetales, siguiendo los pasos de sus abuelos y padres. Desde niña, aprendió los secretos del cultivo y la pasión por la tierra. Hoy, orgullosa de su herencia, Doña María cultiva café en su pequeña finca, manteniendo viva la tradición familiar y ofreciendo un producto de la más alta calidad. ',
  'A Don Pedro la violencia lo obligó a abandonar su hogar y buscar refugio en la ciudad. Sin embargo, Don Pedro nunca olvidó sus raíces campesinas. Tras años de esfuerzo, logró comprar una pequeña parcela de tierra y hoy cultiva hortalizas con dedicación y esmero. Su historia es un ejemplo de resiliencia y un testimonio del amor por la tierra.',
  'Doña Esperanza siempre soñó con tener su propia tierra. Tras años trabajando como jornalera, finalmente logró comprar una pequeña parcela. Con trabajo duro y perseverancia, convirtió ese pedazo de tierra en un próspero huerto. Doña Esperanza es un ejemplo de empoderamiento femenino y una inspiración para quienes buscan un futuro mejor en el campo.',
];

let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    img.classList.remove('prev');
    if (i === index) {
      img.classList.add('active');
    } else if (i === (index - 1 + images.length) % images.length) {
      img.classList.add('prev');
    }
  });
  textElement.innerText = texts[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 9000);

window.onload = () => {
  showImage(currentIndex);
};
