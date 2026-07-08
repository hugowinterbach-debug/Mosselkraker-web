/* ==========================================
   MOSSELKRAKERS GOLF
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initDarkMode();
    initMemberSearch();
    initGalleryFilter();
    initLightbox();

});

/* ==========================================
   MOBILE MENU
========================================== */

function initMobileMenu() {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });
}

/* ==========================================
   DARK MODE
========================================== */

function initDarkMode() {

    const toggleBtn = document.getElementById("darkModeToggle");

    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem("mosselkrakers-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "mosselkrakers-theme",
            isDark ? "dark" : "light"
        );

        toggleBtn.textContent = isDark ? "☀️" : "🌙";

    });
}

/* ==========================================
   MEMBER SEARCH
========================================== */

function initMemberSearch() {

    const searchInput =
        document.getElementById("memberSearch");

    const memberCards =
        document.querySelectorAll(".member-card");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {

        const searchTerm =
            searchInput.value.toLowerCase();

        memberCards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            card.style.display =
                text.includes(searchTerm)
                    ? "block"
                    : "none";

        });

    });
}

/* ==========================================
   GALLERY FILTER
========================================== */

function initGalleryFilter() {

    const buttons =
        document.querySelectorAll(".filter-btn");

    const items =
        document.querySelectorAll(".gallery-item");

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const category =
                button.dataset.filter;

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            items.forEach(item => {

                const itemCategory =
                    item.dataset.category;

                if (
                    category === "all" ||
                    itemCategory === category
                ) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });
}

/* ==========================================
   LIGHTBOX
========================================== */

function initLightbox() {

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    if (!galleryImages.length) return;

    let lightbox =
        document.querySelector(".lightbox");

    if (!lightbox) {

        lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        lightbox.innerHTML =
            '<img src="" alt="Gallery Image">';

        document.body.appendChild(lightbox);
    }

    const lightboxImage =
        lightbox.querySelector("img");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

        });

    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {
            lightbox.classList.remove("active");
        }

    });
}

/* ==========================================
   FUTURE ENHANCEMENTS
========================================== */

/*
Ready for:

✓ Live News Feed
✓ Cloudflare Integration
✓ GitHub Pages Hosting
✓ Google Calendar Integration
✓ Online Tee Sheet
✓ Results Import
✓ CSV Member Upload
✓ Firebase Database
✓ WhatsApp Links
✓ Push Notifications
✓ Online Contact Submission

*/
