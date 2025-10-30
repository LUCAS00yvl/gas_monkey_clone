let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou voltar (n pode ser 1 ou -1)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para ir para um slide específico (clicando no dot)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função principal que controla o slideshow
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Verifica se o índice (n) passou do último slide e volta ao primeiro
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Verifica se o índice (n) foi antes do primeiro e vai para o último
  if (n < 1) {
    slideIndex = slides.length;
  }

  // 1. Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 2. Remove a classe "active" de todos os dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // 3. Mostra o slide atual
  slides[slideIndex - 1].style.display = "block";
  
  // 4. Adiciona a classe "active" ao dot atual
  dots[slideIndex - 1].className += " active";
}
