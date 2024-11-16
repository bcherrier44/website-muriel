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

// Fonction pour afficher/masquer le menu en haut à gauche
function toggleMenu() {
    let menu = document.getElementById("menu-container");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}