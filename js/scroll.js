// Smooth scrolling and timeline highlight
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".timeline .step");
  const sections = document.querySelectorAll("main section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    steps.forEach((step, index) => {
      step.classList.remove("active");
      if (sections[index].id === current) step.classList.add("active");
    });
  });
});
