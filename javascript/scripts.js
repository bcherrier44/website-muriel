// Sélectionner tous les liens dans le menu
const menuLinks = document.querySelectorAll('.menu ul li a');

// Sélectionner toutes les sections du contenu
const sections = document.querySelectorAll('.section');

/**
 * Parcourir chaque lien du menu et ajouter un gestionnaire d'événement 'click'
 */
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien (navigation)

        // Récupérer l'ID de la section cible à partir de l'attribut 'data-target'
        const targetId = this.getAttribute('data-target');

        // Masquer toutes les sections
        sections.forEach(section => {
            section.classList.remove('active'); // Supprimer la classe 'active'
        });

        // Afficher la section correspondante en ajoutant la classe 'active'
        document.getElementById(targetId).classList.add('active');
    });
});
