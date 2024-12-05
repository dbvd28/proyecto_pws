
function setupLoadingScreen() {
    const loadingScreen = document.getElementById("loading_appoint");
    const confirmButton = document.getElementById("appoint");
    const closeCheckbox = document.getElementById("check");
    if (loadingScreen && confirmButton ) {
        // Show the loading screen when confirmButton is clicked
        confirmButton.addEventListener("click", () => {
            loadingScreen.classList.add("visible");
            loadingScreen.classList.remove("hidden");
        });
      
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            loadingScreen.classList.remove("visible");
        loadingScreen.classList.add("hidden");
          }, 3000);
      } else {
        console.error("Button or Loading Screen or Close Button not found!");
      }
  }
  
  // Initialize the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    setupLoadingScreen();
  });