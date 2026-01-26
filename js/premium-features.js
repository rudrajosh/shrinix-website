// ============================================
// PREMIUM FEATURES JAVASCRIPT
// ============================================

// Custom Cursor Effect
class CustomCursor {
    constructor() {
        this.cursor = null;
        this.trails = [];
        this.maxTrails = 8;
        this.init();
    }

    init() {
        // Create main cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);

        // Create cursor trails
        for (let i = 0; i < this.maxTrails; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            document.body.appendChild(trail);
            this.trails.push({
                element: trail,
                x: 0,
                y: 0
            });
        }

        this.addEventListeners();
    }

    addEventListeners() {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor movement
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;

            this.cursor.style.left = cursorX + 'px';
            this.cursor.style.top = cursorY + 'px';

            // Animate trails
            this.trails.forEach((trail, index) => {
                const delay = (index + 1) * 0.05;
                trail.x += (mouseX - trail.x) * (0.15 - delay);
                trail.y += (mouseY - trail.y) * (0.15 - delay);

                trail.element.style.left = trail.x + 'px';
                trail.element.style.top = trail.y + 'px';
                trail.element.style.opacity = 1 - (index / this.maxTrails);
            });

            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        // Hover effect on interactive elements
        const interactiveElements = 'a, button, .product-card, .category-card, input, textarea, select';
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches(interactiveElements)) {
                this.cursor.classList.add('hover');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.matches(interactiveElements)) {
                this.cursor.classList.remove('hover');
            }
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, options);

        this.observeElements();
    }

    observeElements() {
        // Observe all elements with scroll animation classes
        const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
        elements.forEach(el => this.observer.observe(el));
    }

    refresh() {
        this.observeElements();
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const parallaxElements = document.querySelectorAll('.parallax-bg');
            parallaxElements.forEach(element => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }
}

// Lightbox Gallery
class Lightbox {
    constructor() {
        this.lightbox = null;
        this.currentIndex = 0;
        this.images = [];
        this.init();
    }

    init() {
        // Create lightbox HTML
        this.lightbox = document.createElement('div');
        this.lightbox.className = 'lightbox';
        this.lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">×</button>
                <button class="lightbox-nav lightbox-prev">‹</button>
                <img class="lightbox-image" src="" alt="">
                <button class="lightbox-nav lightbox-next">›</button>
            </div>
        `;
        document.body.appendChild(this.lightbox);

        this.addEventListeners();
    }

    addEventListeners() {
        // Close lightbox
        this.lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.close());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.close();
        });

        // Navigation
        this.lightbox.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());
        this.lightbox.querySelector('.lightbox-next').addEventListener('click', () => this.next());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Add click listeners to product images
        this.attachToImages();
    }

    attachToImages() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.product-image, .category-card-image')) {
                this.open(e.target);
            }
        });
    }

    open(imageElement) {
        // Collect all images in the current context
        const container = imageElement.closest('.products-grid, .categories-grid') || document;
        this.images = Array.from(container.querySelectorAll('.product-image, .category-card-image'));
        this.currentIndex = this.images.indexOf(imageElement);

        this.showImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    showImage() {
        const img = this.lightbox.querySelector('.lightbox-image');
        img.src = this.images[this.currentIndex].src;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showImage();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showImage();
    }
}

// Before/After Slider
class BeforeAfterSlider {
    constructor(container) {
        this.container = container;
        this.handle = container.querySelector('.slider-handle');
        this.afterImage = container.querySelector('.after-image');
        this.isDragging = false;
        this.init();
    }

    init() {
        this.handle.addEventListener('mousedown', () => this.isDragging = true);
        document.addEventListener('mouseup', () => this.isDragging = false);

        this.container.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            this.updateSlider(e);
        });

        this.container.addEventListener('touchmove', (e) => {
            this.updateSlider(e.touches[0]);
        });

        this.container.addEventListener('click', (e) => {
            this.updateSlider(e);
        });
    }

    updateSlider(e) {
        const rect = this.container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        const clampedPercentage = Math.max(0, Math.min(100, percentage));

        this.handle.style.left = clampedPercentage + '%';
        this.afterImage.style.clipPath = `inset(0 ${100 - clampedPercentage}% 0 0)`;
    }
}

// Initialize all premium features
function initPremiumFeatures() {
    // Only initialize custom cursor on desktop
    if (window.innerWidth > 768) {
        new CustomCursor();
    }

    // Initialize scroll animations
    window.scrollAnimations = new ScrollAnimations();

    // Initialize parallax
    new ParallaxEffect();

    // Initialize lightbox
    new Lightbox();

    // Initialize before/after sliders
    const beforeAfterSliders = document.querySelectorAll('.before-after-slider');
    beforeAfterSliders.forEach(slider => new BeforeAfterSlider(slider));
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initPremiumFeatures, ScrollAnimations };
}
