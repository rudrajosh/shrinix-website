// ============================================
// MICRO-INTERACTIONS LIBRARY
// ============================================

// 1. Button Ripple Effect
class RippleEffect {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            const button = e.target.closest('button, .btn, .filter-btn, .whatsapp-btn');
            if (!button) return;

            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            // Remove existing ripples
            const existingRipple = button.querySelector('.ripple');
            if (existingRipple) {
                existingRipple.remove();
            }

            button.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
}

// 2. Magnetic Buttons
class MagneticButtons {
    constructor() {
        this.buttons = [];
        this.init();
    }

    init() {
        // Select all buttons and interactive elements
        const selectors = 'button, .btn, .product-card, .category-card, .filter-btn';

        // Use MutationObserver to handle dynamically added elements
        this.observeButtons();
        this.attachMagneticEffect();
    }

    observeButtons() {
        const observer = new MutationObserver(() => {
            this.attachMagneticEffect();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    attachMagneticEffect() {
        const selectors = 'button, .btn, .filter-btn, .whatsapp-btn';
        const elements = document.querySelectorAll(selectors);

        elements.forEach(element => {
            if (element.dataset.magnetic) return; // Already attached
            element.dataset.magnetic = 'true';

            element.addEventListener('mouseenter', (e) => {
                this.activateMagnetic(element);
            });

            element.addEventListener('mouseleave', (e) => {
                this.deactivateMagnetic(element);
            });

            element.addEventListener('mousemove', (e) => {
                this.updateMagnetic(element, e);
            });
        });
    }

    activateMagnetic(element) {
        element.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    deactivateMagnetic(element) {
        element.style.transform = 'translate(0, 0) scale(1)';
        element.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    updateMagnetic(element, e) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * 0.2;
        const deltaY = (e.clientY - centerY) * 0.2;

        element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
    }
}

// 3. Smooth Page Transitions
class PageTransitions {
    constructor() {
        this.overlay = null;
        this.init();
    }

    init() {
        // Create transition overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'page-transition-overlay';
        document.body.appendChild(this.overlay);

        // Override router navigation to add transitions
        this.interceptNavigation();
    }

    interceptNavigation() {
        // Store original router navigate function
        if (window.router && window.router.navigate) {
            const originalNavigate = window.router.navigate.bind(window.router);

            window.router.navigate = (path) => {
                this.transitionOut(() => {
                    originalNavigate(path);
                    setTimeout(() => {
                        this.transitionIn();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                });
            };
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.transitionIn();
        });
    }

    transitionOut(callback) {
        this.overlay.classList.add('active');
        setTimeout(callback, 400);
    }

    transitionIn() {
        setTimeout(() => {
            this.overlay.classList.remove('active');
        }, 100);
    }
}

// 4. Number Counter Animation
class CounterAnimation {
    constructor() {
        this.counters = [];
        this.init();
    }

    init() {
        this.observeCounters();
    }

    observeCounters() {
        const options = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    this.animateCounter(entry.target);
                    entry.target.dataset.counted = 'true';
                }
            });
        }, options);

        // Observe elements with data-counter attribute
        const updateObservers = () => {
            const counters = document.querySelectorAll('[data-counter]');
            counters.forEach(counter => {
                if (!counter.dataset.observed) {
                    observer.observe(counter);
                    counter.dataset.observed = 'true';
                }
            });
        };

        // Initial observation
        updateObservers();

        // Re-observe on DOM changes
        const mutationObserver = new MutationObserver(updateObservers);
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = parseInt(element.dataset.duration) || 2000;
        const suffix = element.dataset.suffix || '';
        const prefix = element.dataset.prefix || '';

        const startTime = performance.now();
        const startValue = 0;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutExpo)
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentValue = Math.floor(startValue + (target - startValue) * easeOutExpo);
            element.textContent = prefix + currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = prefix + target.toLocaleString() + suffix;
            }
        };

        requestAnimationFrame(animate);
    }
}

// Add statistics section helper function
function addStatisticsSection() {
    // This function can be called to add a statistics section to any page
    return `
        <div class="statistics-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number" data-counter="500" data-suffix="+">0+</div>
                        <div class="stat-label">Premium Products</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-counter="1000" data-suffix="+">0+</div>
                        <div class="stat-label">Happy Customers</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-counter="50" data-suffix="+">0+</div>
                        <div class="stat-label">Skilled Artisans</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-counter="15" data-suffix="+ Years">0+ Years</div>
                        <div class="stat-label">Experience</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize all micro-interactions
function initMicroInteractions() {
    // Initialize ripple effect
    new RippleEffect();

    // Initialize magnetic buttons (only on desktop)
    if (window.innerWidth > 768) {
        new MagneticButtons();
    }

    // Initialize page transitions
    new PageTransitions();

    // Initialize counter animations
    new CounterAnimation();

    console.log('✨ Micro-interactions initialized!');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initMicroInteractions, 5200); // After loader
    });
} else {
    setTimeout(initMicroInteractions, 5200);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMicroInteractions,
        RippleEffect,
        MagneticButtons,
        PageTransitions,
        CounterAnimation,
        addStatisticsSection
    };
}
