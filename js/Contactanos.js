function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validación de campo Nombre
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
            alert("Por favor ingresa un número de teléfono válido (solo números, 10 dígitos).");
            return false;
        }
    }

    // Validación de campo Asunto
    if (asunto.trim() === "") {
        alert("Por favor ingresa un asunto.");
        return false;
    }

    // Validación de campo Mensaje
    if (mensaje.trim() === "") {
        alert("Por favor escribe un mensaje.");
        return false;
    }

    // Si todo está bien, permitir el envío del formulario
    return true;
}
