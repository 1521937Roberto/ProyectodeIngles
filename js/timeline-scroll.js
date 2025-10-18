// timeline-scroll.js
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".timeline .step");

  steps.forEach((step) => {
    step.addEventListener("click", () => {
      const targetId = step.getAttribute("data-target");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // ajusta según la altura del navbar
          behavior: "smooth",
        });

        // Actualiza visualmente el estado activo
        steps.forEach((s) => s.classList.remove("active"));
        step.classList.add("active");
      }
    });
  });
});
