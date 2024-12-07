    function pregunta_active(){
        document.querySelectorAll('.info_button').forEach(button => {
            button.addEventListener('click', (e)=> {
              const targetId = button.getAttribute('data-target');
         
        
              document.querySelectorAll('.contenido_pregunta').forEach(div => {
                div.style.display = 'none';
              });
              document.getElementById(targetId).style.display = 'block';

            });
          });
    }