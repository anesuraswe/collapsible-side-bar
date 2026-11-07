
// Get the HTML elements
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");

// Listen for button clicks
toggleBtn.addEventListener("click", () => {

    // Toggle the collapsed class
    sidebar.classList.toggle("collapsed");

    // Check whether the sidebar is collapsed
    const isCollapsed = sidebar.classList.contains("collapsed");

    // Update the button icon
    toggleIcon.textContent = isCollapsed ? "❯" : "❮";

    // Update accessibility information
    toggleBtn.setAttribute("aria-expanded", !isCollapsed);

    toggleBtn.setAttribute(
        "aria-label",
        isCollapsed ? "Expand sidebar" : "Collapse sidebar"
    );

});
