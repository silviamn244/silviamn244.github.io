document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 0 20px #a3ff12";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
