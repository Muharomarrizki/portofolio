<<<<<<< HEAD

// =====================
// AOS
// =====================

AOS.init({
    duration: 1000,
    once: true
});



// =====================
// TYPING EFFECT
// =====================

new Typed("#typing", {

    strings: [
        "Full Stack Developer",
        "Laravel Developer",
        "AI Enthusiast",
        "Machine Learning Explorer"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});



// =====================
// GSAP HERO
// =====================

gsap.from(".badge", {

    y: -50,
    opacity: 0,
    duration: 1

});


gsap.from(".hero h1", {

    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: .3

});


gsap.from(".hero h2", {

    y: 50,
    opacity: 0,
    duration: 1,
    delay: .6

});


gsap.from(".hero p", {

    y: 50,
    opacity: 0,
    duration: 1,
    delay: .8

});


gsap.from(".hero-buttons", {

    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1

});


gsap.from(".hero-image", {

    x: 100,
    opacity: 0,
    duration: 1.5

});




// =====================
// SCROLL REVEAL
// =====================

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {

    gsap.from(section, {

        opacity: 0,

        y: 100,

        duration: 1,

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        }

    });

});




// =====================
// NAVBAR EFFECT
// =====================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,8,22,.8)";
        nav.style.backdropFilter = "blur(25px)";

    }

    else {

        nav.style.background = "rgba(255,255,255,.03)";

    }

});




// =====================
// FLOATING PROJECT CARD
// =====================

gsap.to(".project-card", {

    y: -15,

    repeat: -1,

    yoyo: true,

    duration: 2,

    stagger: .3,

    ease: "power1.inOut"

});




// =====================
// AVATAR GLOW
// =====================

gsap.to(".avatar-ring", {

    boxShadow: "0 0 120px #00f5ff",

    repeat: -1,

    yoyo: true,

    duration: 2

});




// =====================
// VANILLA TILT
// =====================

VanillaTilt.init(

    document.querySelectorAll(

        ".skill-card,.timeline-card,.project-card,.contact-card,.certificate-card"

    ),

    {

        max: 15,

        speed: 400,

        glare: true,

        "max-glare": 0.3

    }

);




// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll(

    'a[href^="#"]'

).forEach(anchor => {

    anchor.addEventListener(

        "click",

        function (e) {

            e.preventDefault();

            document.querySelector(

                this.getAttribute("href")

            ).scrollIntoView({

                behavior: "smooth"

            });

        }

    );

});




// =====================
// CURSOR GLOW
// =====================

document.addEventListener(

    "mousemove",

    e => {

        document.body.style.setProperty(

            "--mouse-x",

            e.clientX + "px"

        );

        document.body.style.setProperty(

            "--mouse-y",

            e.clientY + "px"

        );

    }

);




// =====================
// RANDOM FLOAT
// =====================

gsap.to(".skill-card", {

    y: -8,

    duration: 2,

    repeat: -1,

    yoyo: true,

    stagger: .1

});



console.log(

    "%cPortfolio Loaded 🚀",

    "color:#00f5ff;font-size:20px;font-weight:bold"

);


// =====================
// IMAGE MODAL & SLIDER
// =====================

let currentImageIndex = 0;
let currentImages = [];

function openModal(element) {
    const modal = document.getElementById("imageModal");
    const imagesAttr = element.getAttribute('data-images');

    if (imagesAttr) {
        currentImages = imagesAttr.split(',');
        currentImageIndex = 0;
        updateModalContent();
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

function changeSlide(direction) {
    currentImageIndex += direction;

    // Loop back to start/end
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }

    updateModalContent();
}

function updateModalContent() {
    const modalImage = document.getElementById("modalImage");
    const slideCounter = document.getElementById("slideCounter");

    modalImage.src = currentImages[currentImageIndex];
    slideCounter.innerText = `${currentImageIndex + 1} / ${currentImages.length}`;
}

// Close modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
}
// ===========================
// NAVBAR scroll effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// MOBILE MENU toggle
// ===========================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    icon.className = navLinks.classList.contains('open')
        ? 'ri-close-line'
        : 'ri-menu-line';
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.querySelector('i').className = 'ri-menu-line';
    });
});

// ===========================
// TYPED TEXT animation
// ===========================
const roles = [
    'Web Developer',
    'Laravel Developer',
    'PHP Developer',
    'Machine Learning Enthusiast',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeText() {
    const current = roles[roleIndex];

    if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeText, 1800);
            return;
        }
    } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeText, isDeleting ? 60 : 100);
}

typeText();

// ===========================
// SCROLL REVEAL animation
// ===========================
const revealElements = document.querySelectorAll(
    'section, .project-card, .skill-item, .stat-card, .contact-card'
);

revealElements.forEach(el => {
    el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger effect for grid items
            const delay = entry.target.closest('.projects-grid, .skills-grid, .about-stats, .contact-links')
                ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 80
                : 0;

            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
});

revealElements.forEach(el => observer.observe(el));

// ===========================
// ACTIVE NAV link on scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navItems.forEach(a => {
                a.style.color = '';
                if (a.getAttribute('href') === '#' + section.id) {
                    a.style.color = '#6366f1';
                }
            });
        }
    });
});

