// Fonction pour charger un menu dans la page principale
function loadMenu(menuFile) {
    fetch(menuFile)
        .then(response => response.text())
        .then(html => {
            // Charger le contenu du menu dans la page principale
            document.getElementById('content-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Erreur de chargement du menu:', error);
        });
}

// Fonction pour afficher/masquer le menu en haut à gauche (menu déroulant)
function toggleMenu() {
    var menu = document.getElementById('dropdown-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}


// Fonction pour revenir à la page d'accueil
function goHome() {
    // Revenir à la page d'accueil
    window.location.href = 'index.html';
}
