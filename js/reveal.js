// Reveal Animations on Scroll using Intersection Observer

function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// Re-initialize animations when content changes (e.g., routing)
window.initRevealAnimations = initRevealAnimations;

// Initialize on load
document.addEventListener('DOMContentLoaded', initRevealAnimations);
