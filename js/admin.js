// Admin Panel JavaScript
// Store products in localStorage for persistence
let adminProducts = JSON.parse(localStorage.getItem('adminProducts')) || JSON.parse(JSON.stringify(productsData));

// Authentication is handled by auth.js module
// Credentials are hashed for security
// Username: Shrinix
// Password: shrinix@harish

// Session Configuration
const SESSION_TIMEOUT = 2 * 60 * 1000; // 30 minutes in milliseconds
const WARNING_TIME = 1 * 60 * 1000; // Show warning 2 minutes before timeout
let sessionTimer = null;
let warningTimer = null;
let lastActivity = Date.now();

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const adminDashboard = document.getElementById('adminDashboard');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');

// Check if already logged in and session is valid
if (localStorage.getItem('adminLoggedIn') === 'true') {
    const authToken = localStorage.getItem('adminAuthToken');
    const loginTime = parseInt(localStorage.getItem('adminLoginTime') || '0');
    const currentTime = Date.now();

    if (authToken && validateAuthToken(authToken, SESSION_TIMEOUT) && currentTime - loginTime < SESSION_TIMEOUT) {
        showDashboard();
    } else {
        // Session expired or invalid token
        performLogout(true);
    }
}

// Login Handler with Secure Authentication
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('loginError');
    const loginBtn = e.target.querySelector('button[type="submit"]');

    // Disable button during authentication
    loginBtn.disabled = true;
    loginBtn.innerHTML = '🔄 Authenticating...';

    try {
        // Verify credentials securely using auth.js
        const isValid = await verifyCredentials(username, password);

        if (isValid) {
            // Generate secure authentication token
            const authToken = generateAuthToken();
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminLoginTime', Date.now().toString());
            localStorage.setItem('adminUsername', username);
            localStorage.setItem('adminAuthToken', authToken);

            // Clear error message
            if (errorMsg) errorMsg.style.display = 'none';

            // Show success animation
            loginBtn.textContent = '✓ Success!';
            loginBtn.style.background = '#10b981';

            setTimeout(() => {
                showDashboard();
            }, 500);
        } else {
            // Authentication failed
            loginBtn.disabled = false;
            loginBtn.innerHTML = '<span>Login</span><svg class="login-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>';

            if (errorMsg) {
                errorMsg.textContent = '❌ Invalid username or password';
                errorMsg.style.display = 'block';
            } else {
                alert('❌ Invalid credentials! Please try again.');
            }

            // Shake animation
            loginForm.classList.add('shake');
            setTimeout(() => loginForm.classList.remove('shake'), 500);
        }
    } catch (error) {
        console.error('Login error:', error);
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<span>Login</span><svg class="login-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>';

        if (errorMsg) {
            errorMsg.textContent = '❌ Authentication error. Please try again.';
            errorMsg.style.display = 'block';
        }
    }
});

// Logout Handler
logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        performLogout(false);
    }
});

// Perform Logout
function performLogout(isTimeout) {
    clearTimeout(sessionTimer);
    clearTimeout(warningTimer);
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminLoginTime');
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('adminAuthToken');

    if (isTimeout) {
        alert('⏱️ Your session has expired due to inactivity. Please login again.');
    }

    location.reload();
}

// Reset Session Timer
function resetSessionTimer() {
    lastActivity = Date.now();
    localStorage.setItem('adminLoginTime', lastActivity.toString());

    // Clear existing timers
    clearTimeout(sessionTimer);
    clearTimeout(warningTimer);

    // Set warning timer (2 minutes before timeout)
    warningTimer = setTimeout(() => {
        showSessionWarning();
    }, SESSION_TIMEOUT - WARNING_TIME);

    // Set logout timer
    sessionTimer = setTimeout(() => {
        performLogout(true);
    }, SESSION_TIMEOUT);
}

// Show Session Warning
function showSessionWarning() {
    const remainingTime = Math.floor(WARNING_TIME / 1000 / 60);
    const extend = confirm(`⚠️ Your session will expire in ${remainingTime} minutes due to inactivity.\n\nClick OK to extend your session.`);

    if (extend) {
        resetSessionTimer();
        showMessage('✅ Session extended successfully!', 'success');
    }
}

// Track User Activity
function trackActivity() {
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];

    events.forEach(event => {
        document.addEventListener(event, () => {
            const timeSinceLastActivity = Date.now() - lastActivity;

            // Only reset if more than 1 minute has passed since last activity
            if (timeSinceLastActivity > 60000) {
                resetSessionTimer();
            }
        }, { passive: true });
    });
}

function showDashboard() {
    loginScreen.classList.add('hidden');
    adminDashboard.classList.remove('hidden');

    // Display username in header
    const username = localStorage.getItem('adminUsername') || 'Admin';
    document.querySelector('.admin-user').textContent = `👤 ${username}`;

    // Start session timer and activity tracking
    resetSessionTimer();
    trackActivity();

    initDashboard();
}

// ============================================
// DASHBOARD INITIALIZATION
// ============================================

function initDashboard() {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.dataset.section;

            console.log('Navigating to:', sectionId); // Debug log

            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show section
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Convert kebab-case to camelCase (e.g., "add-product" -> "addProduct")
            const sectionIdCamel = sectionId.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            const targetSectionId = sectionIdCamel + 'Section';

            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                console.log('Showing:', targetSection.id); // Debug log
            } else {
                console.error('Section not found:', targetSectionId); // Debug log
            }

            // Load section data
            if (sectionId === 'products') loadProducts();
            if (sectionId === 'categories') loadCategories();
            if (sectionId === 'export') loadStats();
        });
    });

    // Initialize first section
    loadProducts();

    // Product Form
    document.getElementById('productForm').addEventListener('submit', handleProductSubmit);
    document.getElementById('cancelEdit').addEventListener('click', resetForm);

    // Search and Filter
    document.getElementById('searchProducts').addEventListener('input', filterProducts);
    document.getElementById('filterCategory').addEventListener('change', filterProducts);

    // Export buttons
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('copyDataBtn').addEventListener('click', copyData);
}

// ============================================
// PRODUCTS MANAGEMENT
// ============================================

function loadProducts() {
    const container = document.getElementById('productsTable');
    const allProducts = getAllAdminProducts();

    let html = `
        <div class="product-row header">
            <div>Image</div>
            <div>Name</div>
            <div>Category</div>
            <div>Price</div>
            <div>ID</div>
            <div>Actions</div>
        </div>
    `;

    allProducts.forEach(product => {
        html += `
            <div class="product-row" data-id="${product.id}" data-category="${product.category}">
                <div>
                    <img src="${product.image}" alt="${product.name}" class="product-image-thumb" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3ENo Image%3C/text%3E%3C/svg%3E'">
                </div>
                <div><strong>${product.name}</strong><br><small>${product.description.substring(0, 60)}...</small></div>
                <div>${product.category}<br><small>${product.subcategory}</small></div>
                <div><strong>${product.price}</strong></div>
                <div><code>${product.id}</code></div>
                <div class="product-actions">
                    <button class="btn-edit" onclick="editProduct('${product.id}')">✏️ Edit</button>
                    <button class="btn-delete" onclick="deleteProduct('${product.id}')">🗑️ Delete</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function filterProducts() {
    const searchTerm = document.getElementById('searchProducts').value.toLowerCase();
    const category = document.getElementById('filterCategory').value;
    const rows = document.querySelectorAll('.product-row:not(.header)');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const rowCategory = row.dataset.category;
        const matchesSearch = text.includes(searchTerm);
        const matchesCategory = category === 'all' || rowCategory === category;

        row.style.display = (matchesSearch && matchesCategory) ? 'grid' : 'none';
    });
}

function getAllAdminProducts() {
    return Object.values(adminProducts).flat();
}

function getAdminProductById(id) {
    return getAllAdminProducts().find(p => p.id === id);
}

// ============================================
// ADD/EDIT PRODUCT
// ============================================

function handleProductSubmit(e) {
    e.preventDefault();

    const editId = document.getElementById('editProductId').value;
    const product = {
        id: document.getElementById('productId').value.trim(),
        name: document.getElementById('productName').value.trim(),
        category: document.getElementById('productCategory').value,
        subcategory: document.getElementById('productSubcategory').value.trim(),
        price: document.getElementById('productPrice').value.trim(),
        image: document.getElementById('productImage').value.trim(),
        description: document.getElementById('productDescription').value.trim(),
        gallery: document.getElementById('productGallery').value.trim().split('\n').filter(line => line.trim())
    };

    // Validate
    if (!product.gallery || product.gallery.length === 0) {
        product.gallery = [product.image];
    }

    if (editId) {
        // Update existing product
        updateProduct(editId, product);
        showMessage('✅ Product updated successfully!', 'success');
    } else {
        // Add new product
        if (getAdminProductById(product.id)) {
            alert('❌ Product ID already exists! Please use a unique ID.');
            return;
        }
        addProduct(product);
        showMessage('✅ Product added successfully!', 'success');
    }

    resetForm();
    loadProducts();
    saveToLocalStorage();
}

function addProduct(product) {
    if (!adminProducts[product.category]) {
        adminProducts[product.category] = [];
    }
    adminProducts[product.category].push(product);
}

function updateProduct(oldId, newProduct) {
    // Find and remove old product
    for (let category in adminProducts) {
        const index = adminProducts[category].findIndex(p => p.id === oldId);
        if (index !== -1) {
            adminProducts[category].splice(index, 1);
            break;
        }
    }
    // Add updated product
    addProduct(newProduct);
}

function editProduct(id) {
    const product = getAdminProductById(id);
    if (!product) return;

    // Switch to add product section
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelector('[data-section="add-product"]').classList.add('active');
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById('addProductSection').classList.add('active');

    // Populate form
    document.getElementById('formTitle').textContent = 'Edit Product';
    document.getElementById('editProductId').value = product.id;
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productSubcategory').value = product.subcategory;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productGallery').value = product.gallery ? product.gallery.join('\n') : '';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProduct(id) {
    const product = getAdminProductById(id);
    if (!product) return;

    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
        for (let category in adminProducts) {
            const index = adminProducts[category].findIndex(p => p.id === id);
            if (index !== -1) {
                adminProducts[category].splice(index, 1);
                break;
            }
        }
        showMessage('✅ Product deleted successfully!', 'success');
        loadProducts();
        saveToLocalStorage();
    }
}

function resetForm() {
    document.getElementById('formTitle').textContent = 'Add New Product';
    document.getElementById('editProductId').value = '';
    document.getElementById('productForm').reset();
}

// ============================================
// CATEGORIES
// ============================================

function loadCategories() {
    const container = document.getElementById('categoriesGrid');
    const categoryNames = {
        'bedroom': 'Bedroom',
        'living-room': 'Living Room',
        'dining': 'Dining',
        'study': 'Study & Office',
        'storage': 'Storage',
        'decor': 'Home Decor'
    };

    let html = '';
    for (let catId in categoryNames) {
        const count = adminProducts[catId] ? adminProducts[catId].length : 0;
        html += `
            <div class="category-card">
                <h3>${categoryNames[catId]}</h3>
                <div class="category-count">${count}</div>
                <div class="category-label">Products</div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// ============================================
// EXPORT & STATS
// ============================================

function loadStats() {
    const container = document.getElementById('statsDisplay');
    const allProducts = getAllAdminProducts();
    const categories = Object.keys(adminProducts).length;

    let html = `
        <div class="stat-item">
            <span class="stat-label">Total Products</span>
            <span class="stat-value">${allProducts.length}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Categories</span>
            <span class="stat-value">${categories}</span>
        </div>
    `;

    for (let cat in adminProducts) {
        html += `
            <div class="stat-item">
                <span class="stat-label">${cat}</span>
                <span class="stat-value">${adminProducts[cat].length}</span>
            </div>
        `;
    }

    container.innerHTML = html;
}

function exportData() {
    const dataStr = generateDataJS();
    const blob = new Blob([dataStr], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.js';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('✅ Data exported successfully!', 'success');
}

function copyData() {
    const dataStr = generateDataJS();
    navigator.clipboard.writeText(dataStr).then(() => {
        showMessage('✅ Data copied to clipboard!', 'success');
    }).catch(() => {
        alert('❌ Failed to copy data. Please try export instead.');
    });
}

function generateDataJS() {
    return `// Products Data - Using Actual Product Images
const productsData = ${JSON.stringify(adminProducts, null, 4)};

const categories = [
    {
        id: 'bedroom',
        name: 'Bedroom',
        image: '${adminProducts.bedroom && adminProducts.bedroom[0] ? adminProducts.bedroom[0].image : ''}',
        count: ${adminProducts.bedroom ? adminProducts.bedroom.length : 0}
    },
    {
        id: 'living-room',
        name: 'Living Room',
        image: '${adminProducts['living-room'] && adminProducts['living-room'][0] ? adminProducts['living-room'][0].image : ''}',
        count: ${adminProducts['living-room'] ? adminProducts['living-room'].length : 0}
    },
    {
        id: 'dining',
        name: 'Dining',
        image: '${adminProducts.dining && adminProducts.dining[0] ? adminProducts.dining[0].image : ''}',
        count: ${adminProducts.dining ? adminProducts.dining.length : 0}
    },
    {
        id: 'study',
        name: 'Study & Office',
        image: '${adminProducts.study && adminProducts.study[0] ? adminProducts.study[0].image : ''}',
        count: ${adminProducts.study ? adminProducts.study.length : 0}
    },
    {
        id: 'storage',
        name: 'Storage',
        image: '${adminProducts.storage && adminProducts.storage[0] ? adminProducts.storage[0].image : ''}',
        count: ${adminProducts.storage ? adminProducts.storage.length : 0}
    },
    {
        id: 'decor',
        name: 'Home Decor',
        image: '${adminProducts.decor && adminProducts.decor[0] ? adminProducts.decor[0].image : ''}',
        count: ${adminProducts.decor ? adminProducts.decor.length : 0}
    }
];

// Get all products as a flat array
function getAllProducts() {
    return Object.values(productsData).flat();
}

// Get products by category
function getProductsByCategory(categoryId) {
    return productsData[categoryId] || [];
}

// Get single product by ID
function getProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// Get category by ID
function getCategoryById(categoryId) {
    return categories.find(c => c.id === categoryId);
}
`;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function saveToLocalStorage() {
    localStorage.setItem('adminProducts', JSON.stringify(adminProducts));
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    const content = document.querySelector('.admin-content');
    content.insertBefore(messageDiv, content.firstChild);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Make functions global for onclick handlers
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
