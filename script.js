// Inicializa os ícones da biblioteca Lucide
lucide.createIcons();

// Função para scroll suave ao clicar no botão
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Mudança de cor do header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 5%';
        header.style.background = '#ffffffef';
    } else {
        header.style.padding = '1rem 5%';
        header.style.background = '#ffffff';
    }
});
