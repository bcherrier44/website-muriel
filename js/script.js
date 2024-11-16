document.addEventListener("DOMContentLoaded", function() {
    // Charger le contenu de la page d'accueil au démarrage
    fetch('home-content/home-content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('home-content').innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du contenu :", error));

    // Fonction pour charger le contenu des menus
    const menuButtons = document.querySelectorAll('.menu');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuFile = button.getAttribute('data-menu');
            loadMenuContent(menuFile);
        });
    });

    // Fonction pour charger le contenu d'un menu
    function loadMenuContent(menuFile) {
        fetch(`menus/${menuFile}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('home-content').innerHTML = data;
            })
            .catch(error => console.error("Erreur lors du chargement du menu :", error));
    }

    // Fonction pour afficher/masquer le menu
    document.getElementById("menu-btn").addEventListener("click", function() {
        alert("Menu cliqué ! (Fonction à implémenter)");
    });
});