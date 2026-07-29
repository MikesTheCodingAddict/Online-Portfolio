// This is my second JavaScript file. At this stage, I am still a noob.
// This file is to apply interactivity to the hamburger menu for mobile users.

function hamburger() {
    const hamburger = document.getElementById("hamburger");
    const hamburgerLinks = document.getElementById("hb-links-wrapper");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";

    if (expanded) {
        hamburger.setAttribute("aria-expanded", "false");
        hamburgerLinks.style.display = "none";
    } else {
        hamburger.setAttribute("aria-expanded", "true");
        hamburgerLinks.style.display = "flex";
    }

    document.addEventListener("click", function closeHBMenu(event) {
        const tapOutsideHB = !hamburger.contains(event.target);
        const tapOutsideHBMenu = !hamburgerLinks.contains(event.target);

        if (tapOutsideHB && tapOutsideHBMenu) {
            hamburger.setAttribute("aria-expanded", "false");
            hamburgerLinks.style.display = "none";

            document.removeEventListener("click", closeHBMenu);
        }
    });
}