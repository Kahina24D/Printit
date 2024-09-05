const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");
let slideIndex = 0;

//CREATION DES PUCES DU SLIDER

//creation d'une boucle FOR pour afficher le nombre de slide
for (let i = 0; i < slides.length; i++) {
  let dots = document.querySelector(".dots");
  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("dot_selected");
  }

  dots.appendChild(dot);
}

// creation d'une fonction pour modifier le slide au clic sur la fleche

function changeSlide() {
  bannerImg.src = `./assets/images/slideshow/${slides[slideIndex].image}`;
  bannerText.innerHTML = slides[slideIndex].tagLine;
  //on cherche le dot avec la classe dot-selected

  let dotSelected = document.querySelector(".dot_selected");
  //on lui retire la classe dot-selected

  dotSelected.classList.remove("dot_selected");
  //on trouve le dot a la position de slideindex
  let dots = document.querySelectorAll(".dot");

  //on lui rajoute la class dot-selected
  console.log(slideIndex, dots[slideIndex]);
  dots[slideIndex].classList.add("dot_selected");
}

// ÉCOUTEUR D'ÉVÉNEMENT FLECHE DROITE et gauche  > SLIDE SUIVANTE
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  console.log("ceci est la fleche droite");
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  changeSlide();
});

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  console.log("ceci est la fleche gauche");
  slideIndex--;
  console.log(slideIndex);
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  changeSlide();
});
