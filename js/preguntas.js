    function pregunta_active(){
        document.querySelectorAll('.info_button').forEach(button => {
            button.addEventListener('click', (e)=> {
              // Get the info from the clicked button's 'data-info' attribute
              const targetId = button.getAttribute('data-target');
         
        
              document.querySelectorAll('.contenido_pregunta').forEach(div => {
                div.style.display = 'none';
              });
              // Show the target div associated with the clicked button
              document.getElementById(targetId).style.display = 'block';

            });
          });
    }