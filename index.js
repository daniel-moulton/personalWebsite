/* Open */
function openNav() {
    document.getElementById("navbar").style.width = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("navbar").style.width = "0%";
}

const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#openMenu");

// listen for scroll events
window.addEventListener('scroll', () => {
    // get the current scroll position
    const scrollPos = window.scrollY;
    // loop through each section and see if it's in view
    sections.forEach(section => {
        if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
            // the section is in view, so change the color of the menu icon
            menuIcon.style.color = section.dataset.color;
        }
    });
});