document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
    const prevBtnProducts = document.getElementById('prev-products');
    const nextBtnProducts = document.getElementById('next-products');
    const cardRowProducts = document.getElementById('cardRow-products');
    const cardWidthProducts = cardRowProducts.querySelector('.card').offsetWidth;
    let currentTranslateProducts = 0;

    prevBtnProducts.addEventListener('click', () => {
        currentTranslateProducts += cardWidthProducts;
        if (currentTranslateProducts > 0) currentTranslateProducts = 0;
        cardRowProducts.style.transform = `translateX(${currentTranslateProducts}px)`;
    });

    nextBtnProducts.addEventListener('click', () => {
        currentTranslateProducts -= cardWidthProducts;
        const maxTranslateProducts = -(cardRowProducts.scrollWidth - cardRowProducts.clientWidth);
        if (currentTranslateProducts < maxTranslateProducts) currentTranslateProducts = maxTranslateProducts;
        cardRowProducts.style.transform = `translateX(${currentTranslateProducts}px)`;
    });

    const prevBtnResearch = document.getElementById('prev-research');
    const nextBtnResearch = document.getElementById('next-research');
    const cardRowResearch = document.getElementById('cardRow-research');
    const cardWidthResearch = cardRowResearch.querySelector('.card').offsetWidth;
    let currentTranslateResearch = 0;

    prevBtnResearch.addEventListener('click', () => {
        currentTranslateResearch += cardWidthResearch;
        if (currentTranslateResearch > 0) currentTranslateResearch = 0;
        cardRowResearch.style.transform = `translateX(${currentTranslateResearch}px)`;
    });

    nextBtnResearch.addEventListener('click', () => {
        currentTranslateResearch -= cardWidthResearch;
        const maxTranslateResearch = -(cardRowResearch.scrollWidth - cardRowResearch.clientWidth);
        if (currentTranslateResearch < maxTranslateResearch) currentTranslateResearch = maxTranslateResearch;
        cardRowResearch.style.transform = `translateX(${currentTranslateResearch}px)`;
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("Menu toggle or nav links element not found.");
    }
}

function redirectPage(url) {
    window.location.href = url;
}
