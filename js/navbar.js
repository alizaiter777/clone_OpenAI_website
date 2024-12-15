

document.addEventListener("DOMContentLoaded", loadPage);

function redirectPage(url) {
    window.location.href = url; 
}

function loadPage() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

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


