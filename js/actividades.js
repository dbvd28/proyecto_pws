document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("giveaway-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            confirmationMessage.classList.remove("hidden");
            form.reset(); 
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});
