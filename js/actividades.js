document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("giveaway-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const countdownEndDate = new Date();
    countdownEndDate.setDate(countdownEndDate.getDate() + 19);

    // Validación del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Obtener los valores del formulario
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        // Expresión regular para validar correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validar los campos
        if (!name) {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (!email) {
            alert("Por favor, ingresa tu correo electrónico.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Si todo está correcto, mostrar mensaje de confirmación
        confirmationMessage.classList.remove("hidden");
        confirmationMessage.classList.add("visible"); // Por si deseas agregar un efecto CSS
        form.reset(); 
    });

    // Clase del Slider
    class SliderController {
        slider;
        framestrack;
        slides = [];
        timeInterval = 4000;
        timeIntervalId;
        currentSlideIndex = -1;
        slideDirection = 1; // -1 1

        constructor() {
            this.slider = document.querySelector('.slider');
            this.framestrack = document.querySelector('.framestrack');
            this.slides = [...document.querySelectorAll('.slide')];
            console.log("Slide Status:", {
                "slides": this.slides,
                "framestrack": this.framestrack,
            });
            this.generateUI();
            this.moveSlideTo(0);
        }

        moveSlideTo(slideIndex) {
            if (this.timeIntervalId) {
                clearTimeout(this.timeIntervalId);
            }
            this.currentSlideIndex = slideIndex;
        
            // Aplica el movimiento con translateX
            this.framestrack.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
            this.framestrack.style.transition = "transform 0.5s ease-in-out";
        
            this.tick();
        }
        
        moveNext() {
            if (this.currentSlideIndex + 1 >= this.slides.length) {
                // Ir al duplicado
                this.framestrack.style.transition = "transform 0.5s ease-in-out";
                this.moveSlideTo(this.currentSlideIndex + 1);
        
                // Reiniciar al verdadero slide 1 después de la transición
                setTimeout(() => {
                    this.framestrack.style.transition = "none"; // Eliminar transición
                    this.framestrack.style.transform = "translateX(0%)"; // Regresar a la primera diapositiva
                    this.currentSlideIndex = 0;
                }, 500); // Debe coincidir con la duración de la transición
            } else {
                this.moveSlideTo(this.currentSlideIndex + 1);
            }
        }
        
        movePrevious() {
            if (this.currentSlideIndex - 1 < 0) {
                // Ir al duplicado anterior
                this.framestrack.style.transition = "none";
                this.framestrack.style.transform = `translateX(-${this.slides.length * 100}%)`;
                this.currentSlideIndex = this.slides.length - 1;
                setTimeout(() => {
                    this.moveSlideTo(this.currentSlideIndex - 1);
                }, 0);
            } else {
                this.moveSlideTo(this.currentSlideIndex - 1);
            }
        }

        tick() {
            this.timeIntervalId = setTimeout(() => {
                this.moveNext();
            }, this.timeInterval);
        }

        generateUI() {
            const btnLeft = document.createElement("DIV");
            const btnRight = document.createElement("DIV");
            btnLeft.classList.add('btnLeft');
            btnRight.classList.add('btnRight');
            btnLeft.innerHTML = '&lt;'; // <
            btnRight.innerHTML = '&gt;'; // >
        
            btnLeft.addEventListener('click', (e) => {
                this.movePrevious();
            });
            btnRight.addEventListener('click', (e) => {
                this.moveNext();
            });
            this.slider.appendChild(btnLeft);
            this.slider.appendChild(btnRight);
        
            const navigator = document.createElement("DIV");
            navigator.classList.add("navigator");
        
            this.slides.forEach((slide, i) => {
                const btnNavigateTo = document.createElement("DIV");
                btnNavigateTo.classList.add("btnNavigateTo");
                btnNavigateTo.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.moveSlideTo(i);
                });
                navigator.appendChild(btnNavigateTo);
            });
            this.slider.appendChild(navigator);
        
            // Agregar la primera diapositiva como duplicado al final
            const firstSlideClone = this.slides[0].cloneNode(true);
            this.framestrack.appendChild(firstSlideClone);     
        }
    }

    // Actualización del cronómetro
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownEndDate - now;
      
        // Cálculo de días, horas, minutos y segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
        // Actualización del DOM
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
      
        // Finalizar el cronómetro
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.querySelector(".timer").textContent = "Giveaway Ended";
        }
    }
      
    const miSlider = new SliderController();
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Ejecutar de inmediato
});

