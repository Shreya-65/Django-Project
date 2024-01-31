let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slider img').length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Automatic sliding every 3 seconds
setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const loginPopup = document.getElementById('loginPopup');

    // Show login popup on website open
    overlay.style.display = 'block';
    loginPopup.style.display = 'block';
});

function closeLoginPopup() {
    const overlay = document.getElementById('overlay');
    const loginPopup = document.getElementById('loginPopup');
    overlay.style.display = 'none';
    loginPopup.style.display = 'none';
}

function login() {
    // Add login functionality here
    console.log('Login button clicked');
}
