// Fonction pour afficher/masquer le menu déroulant
function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}

// Fonction pour charger un menu spécifique
function loadMenu(menuPath) {
    fetch(menuPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the menu:', error));
}

// Fonction pour revenir à la page d'accueil
function goHome() {
    // Revenir à la page d'accueil
    window.location.href = 'index.html';
}
