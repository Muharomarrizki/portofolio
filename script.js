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
