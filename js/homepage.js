document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const searchBar = document.getElementById("search-bar");
    const sidebar = document.querySelector(".sidebar");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.trim().toLowerCase();

        if (query === "home" || query === "homepage") {
            window.location.href = "index.html";
        } else if (query === "eventos" || query === "events") {
            window.location.href = "eventos.html";
        }else if (query === "agendar cita" || query === "Agendar cita") {
            window.location.href = "agendarcita.html";
        } 
        else {
            alert("Página no encontrada. Intente con 'Home' o 'Cómo Ayudar'.");
        }
    });

});
