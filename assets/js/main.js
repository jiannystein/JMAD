console.log("JMAD Website Loaded");

// Future: Add smooth scroll or IntersectionObserver animations here
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('nav-mobile--open')) {
            navLinks.classList.remove('nav-mobile--open');
        }
    });
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const toggleIcon = mobileToggle.querySelector('i');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-mobile--open');

    // Toggle Icon
    if (navLinks.classList.contains('nav-mobile--open')) {
        toggleIcon.classList.replace('ph-list', 'ph-x');
    } else {
        toggleIcon.classList.replace('ph-x', 'ph-list');
    }
});
