/* =========================================
   SILVIA BODY SYSTEM - SCRIPT.JS
   Animaciones + UX Premium Fitness
========================================= */

/* ================================
   1. FADE IN ON SCROLL
================================ */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

// Elementos que se animan al aparecer
const animatedElements = document.querySelectorAll(
  ".hero, .card, h2, h3, p, .btn"
);

animatedElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


/* ================================
   2. EFECTO HERO PREMIUM (ON LOAD)
================================ */

window.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero h2");
  const heroText = document.querySelector(".hero p");
  const heroBtn = document.querySelector(".hero .btn");

  if (heroTitle) heroTitle.style.opacity = 0;
  if (heroText) heroText.style.opacity = 0;
  if (heroBtn) heroBtn.style.opacity = 0;

  setTimeout(() => {
    if (heroTitle) {
      heroTitle.style.transition = "all 1s ease";
      heroTitle.style.opacity = 1;
      heroTitle.style.transform = "translateY(0)";
    }
  }, 200);

  setTimeout(() => {
    if (heroText) {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }
  }, 500);

  setTimeout(() => {
    if (heroBtn) {
      heroBtn.style.transition = "all 1s ease";
      heroBtn.style.opacity = 1;
      heroBtn.style.transform = "translateY(0)";
    }
  }, 800);
});


/* ================================
   3. BOTONES CTA INTERACTIVOS
================================ */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

  // Hover efecto
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 15px 35px rgba(255, 80, 0, 0.4)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "0 10px 25px rgba(255, 80, 0, 0.2)";
  });

  // Click feedback
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.97)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1.05)";
  });

});


/* ================================
   4. NAVBAR DINÁMICA AL SCROLL
================================ */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

  if (!nav) return;

  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.85)";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.background = "rgba(10,10,10,0.4)";
    nav.style.boxShadow = "none";
  }

});


/* ================================
   5. SCROLL SUAVE ENTRE SECCIONES
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* ================================
   6. EFECTO PARALLAX SUAVE HERO
================================ */

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  if (hero) {
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.3 + "px";
  }
});


/* ================================
   7. PERFORMANCE & LIMPIEZA
================================ */

// Reduce repaints en scroll (optimización ligera)
let ticking = false;

function onScrollOptimized() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener("scroll", onScrollOptimized);
