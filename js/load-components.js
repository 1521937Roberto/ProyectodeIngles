document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");

  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      navbarContainer.innerHTML = data;
      document.dispatchEvent(new Event("navbarLoaded"));
    })
    .catch((err) => console.error("Error loading navbar:", err));
});
