const navLinksActive = document.getElementById("nav-links-active");
const toggleButton = document.getElementById("nav-toggle");

toggleButton.addEventListener("click", () =>
  navLinksActive.classList.toggle("active")
);
