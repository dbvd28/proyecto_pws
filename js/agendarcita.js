function setupLoadingScreen() {
  const loadingScreen = document.getElementById("loading_appoint");
  const confirmButton = document.getElementById("appoint");
  const closeCheckbox = document.getElementById("check");
  if (loadingScreen && confirmButton) {
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
        alert(
          "Por favor, complete los siguientes campos: " +
            missingFields.join(", ")
        );
        return; // Evita que se depsliegue la vsita de carga
      }
      if (nombre.trim() === "") {
        alert("Por favor ingresa tu nombre.");
        return false;
      }

      // Validación de campo Email (validación básica)
      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (email.trim() === "") {
        alert("Por favor ingresa tu correo electrónico.");
        return false;
      } else if (!emailRegex.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
      }

      if (telefono.trim() !== "") {
        var telefonoRegex = /^[0-9]{10}$/; // Verifica que tenga exactamente 10 dígitos
        if (!telefonoRegex.test(telefono)) {
          alert(
            "Por favor ingresa un número de teléfono válido (solo números, 10 dígitos)."
          );
          return false;
        }
      }
      loadingScreen.classList.add("visible");
      loadingScreen.classList.remove("hidden");
    });

    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      loadingScreen.classList.remove("visible");
    }, 5000);
  } else {
    console.error("Button or Loading Screen or Close Button not found!");
  }
}
x;
document.addEventListener("DOMContentLoaded", () => {
  setupLoadingScreen();
});
