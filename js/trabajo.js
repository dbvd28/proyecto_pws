document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const position = document.getElementById('position').value;
    const cv = document.getElementById('cv').files[0];

 
    if (!cv) {
        alert('Por favor, carga tu CV');
        return;
    }

 
    
    document.getElementById('confirmation-message').classList.remove('hidden');

    
    document.getElementById('recruitmentForm').reset();
});
