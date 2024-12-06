document.addEventListener("DOMContentLoaded", function() {
    const catalogButton = document.querySelector(".button-catalog");
    const giveawayButton = document.querySelector(".button-giveaway");
    const aboutUsButton = document.querySelector(".button-aboutus");

    catalogButton.addEventListener("click", function() {
        window.location.href = "catalogo.html"; //
    });

    giveawayButton.addEventListener("click", function() {
        window.location.href = "actividades.html"; 
    });

    aboutUsButton.addEventListener("click", function() {
        window.location.href = "aboutus.html"; 
    });
});
