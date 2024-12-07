
function setupLoadingScreen() {
    const loadingScreen = document.getElementById("loading_appoint");
    const confirmButton = document.getElementById("appoint");
    const closeCheckbox = document.getElementById("check");
    if (loadingScreen && confirmButton ) {

        confirmButton.addEventListener("click", () => {
          const nombre = document.getElementById("nombre").value.trim();
          const email = document.getElementById("email").value.trim();
          const number = document.getElementById("number").value.trim();
          const date = document.getElementById("date").value.trim();
          const time = document.getElementById("time").value.trim();
          const description = document.getElementById("description").value.trim();
          const missingFields = [];

          // Valida si cada campo esta vacio
          if (!nombre) missingFields.push("Nombre Completo");
          if (!email) missingFields.push("Correo electronico");
          if (!number) missingFields.push("Telefono");
          if (!date) missingFields.push("Fecha");
          if (!time) missingFields.push("Hora");
          if (!description) missingFields.push("Motivo de la visita");

          // Manda mensaje al usuario
          if (missingFields.length > 0) {
              alert("Por favor, complete los siguientes campos: " + missingFields.join(", "));
              return; // Evita que se depsliegue la vsita de carga
          }

            loadingScreen.classList.add("visible");
            loadingScreen.classList.remove("hidden");
        });
      
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            loadingScreen.classList.remove("visible");
        loadingScreen.classList.add("hidden");
          }, 5000);
      } else {
        console.error("Button or Loading Screen or Close Button not found!");
      }
  }
x 
  document.addEventListener("DOMContentLoaded", () => {
    setupLoadingScreen();
  });