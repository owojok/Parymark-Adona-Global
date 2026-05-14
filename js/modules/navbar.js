/**
 * navbar.js — Scroll-aware sticky nav and mobile hamburger toggle
 *
 * Adds .scrolled class on scroll for glassmorphism effect.
 * Toggles mobile overlay menu via hamburger button.
 */

export function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    if (!navbar) return;

    // Glassmorphism on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile hamburger toggle
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('open');

            // Prevent body scroll when menu is open
            document.body.style.overflow =
                mobileNav.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when a mobile nav link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
}
