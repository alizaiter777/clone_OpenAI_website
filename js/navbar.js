
let currentTranslate = 0;
document.addEventListener("DOMContentLoaded", loadPage);

    prevBtn.addEventListener('click', () => {
      currentTranslate += cardWidth;
      if (currentTranslate > 0) currentTranslate = 0;
      cardRow.style.transform = `translateX(${currentTranslate}px)`;
    });

    nextBtn.addEventListener('click', () => {
      currentTranslate -= cardWidth;
      const maxTranslate = -(cardRow.scrollWidth - cardRow.clientWidth);
      if (currentTranslate < maxTranslate) currentTranslate = maxTranslate;
      cardRow.style.transform = `translateX(${currentTranslate}px)`;
    });
function redirectPage(url) {
    window.location.href = url; 
}

function loadPage() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const cardRow = document.getElementById('cardRow');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const cardWidth = cardRow.querySelector('.card').offsetWidth;

    console.log("menuToggle:", menuToggle);
    console.log("navLinks:", navLinks);

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("Menu toggle or nav links element not found.");
    }
}




  