// Sélectionner tous les liens de menu
const menuLinks = document.querySelectorAll('.menu ul li a');

// Sélectionner toutes les sections
const sections = document.querySelectorAll('.section');

// Ajouter un événement de clic à chaque lien de menu
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien

        // Récupérer l'ID de la section ciblée
        const targetId = this.getAttribute('data-target');

        // Masquer toutes les sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Afficher la section ciblée
        document.getElementById(targetId).classList.add('active');
    });
});
