// Main Application
window.currentFilter = 'all';

// Initialize App
function initApp() {
    // Loader - Hide after 5 seconds
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('navigation').classList.remove('hidden');
        document.getElementById('footer').classList.remove('hidden');
    }, 5000);

    // Setup Navigation
    setupNavigation();

    // Setup Routes
    setupRoutes();

    // Header WhatsApp Button
    document.getElementById('headerWhatsappBtn').addEventListener('click', sendGeneralWhatsApp);

    // Initialize premium features
    initPremiumFeaturesAfterLoad();
}

function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

function setupRoutes() {
    // Register all routes
    router.register('home', () => {
        renderPage(renderHomePage());
    });

    router.register('about', () => {
        renderPage(renderAboutPage());
    });

    router.register('products', () => {
        renderPage(renderProductsPage(window.currentFilter));
    });

    router.register('category', (params) => {
        const categoryId = params[0];
        renderPage(renderCategoryPage(categoryId));
    });

    router.register('product', (params) => {
        const productId = params[0];
        renderPage(renderProductDetailPage(productId));
    });

    router.register('customization', () => {
        renderPage(renderCustomizationPage());
    });

    router.register('contact', () => {
        renderPage(renderContactPage());
    });
}

function renderPage(html) {
    document.getElementById('app').innerHTML = html;

    // Refresh scroll animations for newly rendered content
    if (window.scrollAnimations) {
        window.scrollAnimations.refresh();
    }
}

// Initialize premium features after app loads
function initPremiumFeaturesAfterLoad() {
    // Wait for loader to finish
    setTimeout(() => {
        if (typeof initPremiumFeatures === 'function') {
            initPremiumFeatures();
        }
    }, 5100);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
