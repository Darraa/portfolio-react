export function onScroll() {
    let currentSectionIndex = 0;
    let prevSectionBottom = 0;

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".link");

    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollTop = window.scrollY;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            currentSectionIndex = i;
        } else if (scrollTop >= sectionBottom) {
            prevSectionBottom = sectionBottom;
        }
    });

    navLinks.forEach((link, i) => {
        if (i === currentSectionIndex) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

export function initScroll() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        if (section.offsetHeight === window.innerHeight) {
            onScroll();
        }
    });

    window.addEventListener("scroll", onScroll);
}
