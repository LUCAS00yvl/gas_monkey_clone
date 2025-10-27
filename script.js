// Seleciona o botão hambúrguer e o menu de navegação
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Adiciona um evento de "click" ao hambúrguer
hamburger.addEventListener('click', () => {
    // Alterna a classe 'active' no menu
    // Isso vai fazer o menu aparecer ou desaparecer
    navMenu.classList.toggle('active');

    // Opcional: Animação do ícone do hambúrguer (troca de barras para 'X')
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
