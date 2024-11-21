const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imageSources = ["img/img-1.jpg", "img/img-2.jpg"];
let currentSlide = 0;

function updateMainImage(index) {
  mainImage.src = imageSources[index];
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % imageSources.length;
  updateMainImage(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + imageSources.length) % imageSources.length;
  updateMainImage(currentSlide);
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentSlide = index;
    updateMainImage(currentSlide);
  });
});

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

updateMainImage(currentSlide);

const hamMenuBtn = document.querySelector(".menu-bar");
const movedNav1 = document.querySelector(".nav-bar");
const movedNav2 = document.querySelector(".nav-extra");
const activeNav = document.getElementById("nav");

hamMenuBtn.addEventListener("click", function (e) {
  movedNav1.classList.toggle("active-1");
  movedNav2.classList.toggle("active-2");
  activeNav.classList.toggle("active-nav");
  e.preventDefault();
});

const searchBtn = document.querySelector("#nav .search-btn");
const searchInput = document.querySelector("#nav .search");

searchBtn.addEventListener("click", function (e) {
  searchInput.classList.toggle("show-search");
  e.preventDefault();
});
