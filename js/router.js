// Router - Simple Hash-based Routing
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    register(path, handler) {
        this.routes[path] = handler;
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        const [path, ...params] = hash.split('/');
        
        this.currentRoute = { path, params };
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${path}`) {
                link.classList.add('active');
            }
        });

        // Handle route
        if (this.routes[path]) {
            this.routes[path](params);
        } else if (path === 'category' && params[0]) {
            this.routes['category'](params);
        } else if (path === 'product' && params[0]) {
            this.routes['product'](params);
        } else {
            this.routes['home']();
        }

        scrollToTop();
    }

    navigate(path) {
        window.location.hash = path;
    }
}

const router = new Router();
