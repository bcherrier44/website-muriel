// Sélection des liens du menu
const menuLinks = document.querySelectorAll('.menu ul li a');
// Sélection des sections
const sections = document.querySelectorAll('.section');

// Ajouter un écouteur d'événement à chaque lien
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target'); // Obtenir l'ID cible

        // Désactiver toutes les sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Activer la section ciblée
        document.getElementById(targetId).classList.add('active');
    });
});