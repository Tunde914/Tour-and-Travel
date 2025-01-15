const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
}); 

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".destination-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".showcase-image img", {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".showcase-content h4", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".showcase-content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".showcase-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".banner-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover-card", {
    ...scrollRevealOption,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3, // Fixed typo in slidesPerView
    spaceBetween: 20,
    loop: true,
});
