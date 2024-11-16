// Fonction pour charger dynamiquement le contenu de la page d'accueil
function loadHomeContent() {
    fetch('home-content.html')  // Charger le contenu de la page d'accueil
        .then(response => response.text())
        .then(html => {
            document.getElementById('content-container').innerHTML = html;
            setupMenuLinks();  // Réinitialiser les liens du menu après le chargement
        })
        .catch(err => console.log('Erreur de chargement du contenu : ', err));
}

// Fonction pour configurer les liens de menu pour charger les menus dynamiquement
function setupMenuLinks() {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Empêcher le comportement de lien par défaut
            const menuName = e.target.dataset.menu;  // Récupérer le nom du menu
            loadMenu(menuName);  // Charger le menu sélectionné
        });
    });
}

// Fonction pour charger un menu dynamique
function loadMenu(menuName) {
    fetch(`menus/${menuName}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content-container').innerHTML = html;
        })
        .catch(err => console.log('Erreur de chargement du menu : ', err));
}

// Initialiser la page d'accueil au chargement de la page
document.addEventListener('DOMContentLoaded', loadHomeContent);

// Gérer l'affichage du menu déroulant
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', function() {
    document.querySelector('.menu-container').classList.toggle('active');
});
