
/* ===== NAVBAR SCROLL EFFECT ===== */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


/* ===== ACTIVE NAVIGATION LINK ===== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


/* ===== REVEAL SECTIONS ON SCROLL ===== */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.12
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


/* ===== FOOTER YEAR ===== */

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        "© " + new Date().getFullYear() +
        " My Portfolio. Built with passion.";
}


/* ===== WELCOME MESSAGE ===== */

console.log("Welcome to my Portfolio Website!");

