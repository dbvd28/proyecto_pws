document.getElementById('recruitmentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value;
    const cv = document.getElementById('cv').files[0];

    // Expresiones regulares para validación
    const nameRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación básica de email
    const phoneRegex = /^\d{8}$/; // Solo 8 dígitos
    const allowedExtensions = /\.(pdf|doc|docx)$/i; // Extensiones permitidas

    // Validación del nombre
    if (!name || !nameRegex.test(name)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        return;
    }

    // Validación del correo electrónico
    if (!email || !emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validación del número de teléfono
    if (!phone || !phoneRegex.test(phone)) {
        alert('Por favor, ingresa un número de teléfono válido (8 dígitos).');
        return;
    }

    // Validación del archivo cargado
    if (!cv) {
        alert('Por favor, carga tu CV.');
        return;
    }
    if (!allowedExtensions.test(cv.name)) {
        alert('Por favor, carga un archivo válido (.pdf, .doc o .docx).');
        return;
    }

    // Simulación de envío exitoso
    document.getElementById('confirmation-message').classList.remove('hidden');
    document.getElementById('confirmation-message').textContent = '¡Tu solicitud ha sido enviada con éxito!';

    // Limpiar el formulario
    document.getElementById('recruitmentForm').reset();

    // Ocultar el mensaje después de unos segundos (opcional)
    setTimeout(() => {
        document.getElementById('confirmation-message').classList.add('hidden');
    }, 5000);
});
