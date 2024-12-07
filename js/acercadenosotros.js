window.addEventListener('load', function() {
    const bannerText = document.querySelector('.banner-text h1');
    
   
    bannerText.classList.add('scroll-write');

   
    bannerText.addEventListener('animationend', function() {
        
        bannerText.classList.add('finished');
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect(); 
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
} 

window.addEventListener("scroll", function () {
    const bannerText = document.getElementById("banner-text");

    if (isInViewport(bannerText) && !bannerText.classList.contains("typing")) {
        bannerText.classList.add("typing"); 
    }
});