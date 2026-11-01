/* Author: Michael Cortez
   Filename: revealUp.js
   Last updated: Oct. 29, 2026 */

// Selecting the hidden elements.
const hiddenElements = document.querySelectorAll('.hidden');

// New observer made for observing the hidden elements (And the revealed ones).
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-up');
            observer.unobserve(entry.target);
        }
    });
});

// Looping through the elements and observing them, allowing them to animate just once.
hiddenElements.forEach((el) => observer.observe(el));