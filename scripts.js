// scripts.js

// Fonction pour filtrer les vidéos en fonction des cases cochées
function filterVideos() {
    // Récupérer toutes les cases cochées
    const checkedFilters = Array.from(document.querySelectorAll('#keyword-filters input:checked'))
        .map(input => input.value.toLowerCase());

    // Récupérer toutes les vidéos
    const videoContainers = document.querySelectorAll('.video-container');

    // Filtrer les vidéos
    videoContainers.forEach(container => {
        const keywords = container.getAttribute('data-keywords').toLowerCase().split(' ');

        // Vérifier si la vidéo correspond aux filtres sélectionnés
        const matches = checkedFilters.every(filter => keywords.includes(filter));

        // Afficher ou masquer les vidéos en fonction des résultats du filtre
        if (matches) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    });
}
