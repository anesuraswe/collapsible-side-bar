
// Get HTML elements
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const mobileScreen = window.matchMedia("(max-width: 768px)");

// Desktop sidebar toggle
toggleBtn.addEventListener("click", () => {

    if (mobileScreen.matches) {
        // Close sidebar on mobile
        sidebar.classList.remove("mobile-open");
    } else {
        // Collapse or expand on desktop
        sidebar.classList.toggle("collapsed");

        const isCollapsed =
            sidebar.classList.contains("collapsed");

        toggleIcon.textContent = isCollapsed ? "❯" : "❮";

        toggleBtn.setAttribute(
            "aria-expanded",
            String(!isCollapsed)
        );

        toggleBtn.setAttribute(
            "aria-label",
            isCollapsed ? "Expand sidebar" : "Collapse sidebar"
        );
    }

});

// Mobile hamburger menu
mobileMenuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("mobile-open");

});

// Close sidebar when a navigation link is clicked on mobile
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileScreen.matches) {
            sidebar.classList.remove("mobile-open");
        }

    });

});
