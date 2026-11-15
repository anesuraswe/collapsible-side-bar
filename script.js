const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const mobileScreen = window.matchMedia("(max-width: 768px)");

toggleBtn.addEventListener("click", () => {
  if (mobileScreen.matches) {
    sidebar.classList.remove("mobile-open");
  } else {
    sidebar.classList.toggle("collapsed");

    const isCollapsed = sidebar.classList.contains("collapsed");

    toggleIcon.textContent = isCollapsed ? "❯" : "❮";

    toggleBtn.setAttribute("aria-expanded", String(!isCollapsed));

    toggleBtn.setAttribute(
      "aria-label",
      isCollapsed ? "Expand sidebar" : "Collapse sidebar",
    );
  }
});

mobileMenuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("mobile-open");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileScreen.matches) {
      sidebar.classList.remove("mobile-open");
    }
  });
});
