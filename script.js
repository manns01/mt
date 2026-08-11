/* =========================================================
MANISH TAMTA — WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

```
/* ---------------------------------------------------------
   PAGE LOADER
--------------------------------------------------------- */

const loader = document.getElementById("pageLoader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("loaded");

    }, 350);

});



/* ---------------------------------------------------------
   NAVIGATION
--------------------------------------------------------- */

const header = document.getElementById("siteHeader");

const menuToggle = document.getElementById("menuToggle");

const siteNav = document.getElementById("siteNav");


function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


updateHeader();



/* ---------------------------------------------------------
   MOBILE MENU
--------------------------------------------------------- */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            siteNav.classList.toggle("open");

        menuToggle.classList.toggle(
            "open",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });

}


/* Close menu after clicking a link */

document.querySelectorAll(".site-nav a").forEach(link => {

    link.addEventListener("click", () => {

        siteNav.classList.remove("open");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    });

});



/* ---------------------------------------------------------
   SCROLL REVEAL
--------------------------------------------------------- */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* ---------------------------------------------------------
   SUBTLE HERO PARALLAX
--------------------------------------------------------- */

const heroVisual =
    document.querySelector(".hero-visual");


if (
    heroVisual &&
    window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);


            heroVisual.style.transform =
                `translate(${x * 8}px, ${y * 8}px)`;

        },
        { passive: true }
    );

}



/* ---------------------------------------------------------
   SMOOTH INTERNAL LINKS
--------------------------------------------------------- */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
```

});
