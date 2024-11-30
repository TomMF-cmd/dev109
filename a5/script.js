const slides = document.querySelectorAll(".slides img");
const descriptions = [
    "White Land Rover Range Rover Suv on Road",
    "Blue Bmw Sedan Near Green Lawn Grass",
    "Black Audi A-series Parked Near Brown Brick House",
    "Red Mercedes Benz G Class",
    "Red Coupe Soft-top on Road"
];
const description = document.querySelector(".description");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        description.textContent = descriptions[slideIndex];
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    description.textContent = descriptions[slideIndex];
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
