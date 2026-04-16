document.addEventListener("DOMContentLoaded", () => {

    const fadeElements = document.querySelectorAll(
        ".fade-in, .hero-title, .hero-subtitle, .service, .text-block"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach(el => observer.observe(el));

    const buttons = document.querySelectorAll("button, .btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "all 0.3s ease";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });

        button.addEventListener("mousedown", () => {
            button.style.transform = "scale(0.95)";
        });

        button.addEventListener("mouseup", () => {
            button.style.transform = "scale(1.05)";
        });
    });

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        });
    }

    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");

    if (heroTitle) {
        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(20px)";

        setTimeout(() => {
            heroTitle.style.transition = "all 0.8s ease";
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        }, 300);
    }

    if (heroSubtitle) {
        heroSubtitle.style.opacity = "0";
        heroSubtitle.style.transform = "translateY(20px)";

        setTimeout(() => {
            heroSubtitle.style.transition = "all 0.8s ease";
            heroSubtitle.style.opacity = "1";
            heroSubtitle.style.transform = "translateY(0)";
        }, 700);
    }

});
