/* =====================================================
   Mosselkrakers Golf - script.js
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Mobile Navigation
       ========================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll("#navMenu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    /* ==========================================
       Dark Mode
       ========================================== */

    const darkModeBtn = document.getElementById("darkModeBtn");
    const body = document.body;

    const savedTheme = localStorage.getItem("mosselkrakers-theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        updateThemeIcon(true);
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {

            body.classList.toggle("dark-mode");

            const isDark = body.classList.contains("dark-mode");

            localStorage.setItem(
                "mosselkrakers-theme",
                isDark ? "dark" : "light"
            );

            updateThemeIcon(isDark);
        });
    }

    function updateThemeIcon(isDark) {
        const icon = darkModeBtn?.querySelector("i");

        if (!icon) return;

        icon.className = isDark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
    }

    /* ==========================================
       Member Search
       ========================================== */

    const searchBox = document.getElementById("memberSearch");

    if (searchBox) {

        searchBox.addEventListener("keyup", () => {

            const searchValue =
                searchBox.value.toLowerCase();

            const members =
                document.querySelectorAll(".member-card");

            members.forEach(member => {

                const text =
                    member.textContent.toLowerCase();

                member.style.display =
                    text.includes(searchValue)
                        ? "block"
                        : "none";
            });

        });

    }

    /* ==========================================
       Gallery Lightbox
       ========================================== */

    const galleryImages =
        document.querySelectorAll(".gallery-grid img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const closeLightbox =
        document.getElementById("closeLightbox");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            if (!lightbox || !lightboxImage) return;

            lightbox.style.display = "block";
            lightboxImage.src = image.src;

        });

    });

    if (closeLightbox) {

        closeLightbox.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

    }

    if (lightbox) {

        lightbox.addEventListener("click", e => {

            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }

        });

    }

    /* ==========================================
       Gallery Filters
       ========================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const galleryItems =
        document.querySelectorAll(".gallery-grid img");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter =
                button.textContent.trim();

            galleryItems.forEach(image => {

                const category =
                    image.dataset.category || "All";

                if (
                    filter === "All" ||
                    category === filter
                ) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }

            });

        });

    });

    /* ==========================================
       Contact Form
       ========================================== */

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", e => {

            e.preventDefault();

            alert(
                "Thank you for your message. This demo form is not yet connected to email."
            );

            contactForm.reset();

        });

    }

    /* ==========================================
       Active Navigation Highlight
       ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll("#navMenu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                pageYOffset >= sectionTop &&
                pageYOffset <
                    sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-link");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {
                link.classList.add("active-link");
            }

        });

    });

    /* ==========================================
       Smooth Fade-In Animation
       ========================================== */

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },

        {
            threshold: 0.15
        }

    );

    document
        .querySelectorAll(
            ".card, .member-card, .event, .table-container"
        )
        .forEach(item => {

            item.classList.add("hidden");
            observer.observe(item);

        });

});

/* =====================================================
   Utility Functions
   ===================================================== */

/* Future expansion:
   - Load members from JSON
   - Load news from Google Sheets
   - Load results from CSV export
   - Calendar integration
   - Live leaderboard updates
*/
