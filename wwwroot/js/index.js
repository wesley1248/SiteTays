// Navegação da página inicial
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a[data-target]');
    const sections = document.querySelectorAll('section');
    const homeScreen = document.getElementById('home-screen');
    let currentActiveSection = null;

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Se a seção clicada já está ativa, fecha e volta para a tela inicial
            if (currentActiveSection === targetSection) {
                targetSection.classList.remove('active');
                homeScreen.classList.remove('hidden');
                currentActiveSection = null;
                return;
            }

            // Fecha todas as outras seções
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Esconde a tela inicial
            homeScreen.classList.add('hidden');

            // Ativa a seção clicada
            targetSection.classList.add('active');
            currentActiveSection = targetSection;
        });
    });
});