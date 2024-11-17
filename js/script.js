// Fonction pour afficher/masquer le menu déroulant
function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}

// Fonction pour fermer le menu déroulant
function closeMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "none";
}

// Fonction pour charger un menu spécifique
function loadMenu(menuPath) {
    fetch(menuPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut: ${response.status}`);
            }
            return response.text();
        })        
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur lors du chargement du menu :', error);
            alert("Impossible de charger ce menu.");
        });
}

// Fonction pour charger la page d'accueil
function loadHome() {
    fetch('home-content/home-content.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la page d’accueil :', error);
            alert("Impossible de charger la page d'accueil.");
        });
}

// Chargement initial de la page d'accueil
document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

// Fonction pour revenir à la page d'accueil
function goHome() {
    // Revenir à la page d'accueil
    window.location.href = 'index.html';
}
