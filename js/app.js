/**
 * app.js — Application entry point
 *
 * Imports all modules and initialises them on DOMContentLoaded.
 */

import { initNavbar } from './modules/navbar.js';
import { initScrollAnimations } from './modules/scroll-animations.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
    initSmoothScroll();
});
