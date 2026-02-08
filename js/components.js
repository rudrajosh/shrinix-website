// Page Components - Generate HTML for each page

// Home Page
function renderHomePage() {
    return `
        <div class="hero">
            <video class="hero-video" autoplay muted loop playsinline>
                <source src="video.mp4" type="video/mp4">
            </video>
            <div class="hero-overlay"></div>
            <div class="hero-content" style="animation: none; opacity: 1;">
                <h1 class="hero-title" style="overflow: hidden; line-height: 1.2;">
                    <span class="intro-clip-text intro-delay-1" style="display: block;">SHRINIX</span>
                </h1>
                <p class="hero-subtitle intro-element intro-delay-2">Crafting Timeless Wooden Elegance</p>
                <div class="hero-buttons intro-element intro-delay-3">
                    <button class="btn btn-primary" onclick="router.navigate('products')">
                        Explore Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                    <button class="btn btn-secondary" onclick="router.navigate('customization')">
                        Custom Orders
                    </button>
                </div>
            </div>
        </div>

        <section class="section categories-section scroll-animate">
            <div class="container">
                <div class="section-header reveal">
                    <h2 class="section-title">Explore Our Collections</h2>
                    <p class="section-description">Discover premium wooden furniture for every room</p>
                </div>
                <div class="categories-grid">
                    ${categories.map((cat, index) => `
                        <div class="category-card reveal reveal-delay-${(index % 3) * 100}" onclick="router.navigate('category/${cat.id}')">
                            <img src="${cat.image}" alt="${cat.name}" class="category-card-image">
                            <div class="category-card-overlay">
                                <h3 class="category-card-title">${cat.name}</h3>
                                <p class="category-card-count">${cat.count} Products</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="section scroll-animate" style="background: white;">
            <div class="container" style="text-align: center;">
                <h2 class="section-title">Why Choose SHRINIX?</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
                    <div class="reveal reveal-delay-100">
                        <div style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;">🌳</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Premium Wood</h3>
                        <p>Sourced from sustainable forests</p>
                    </div>
                    <div class="reveal reveal-delay-200">
                        <div style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;">🛠️</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Expert Craftsmanship</h3>
                        <p>Handcrafted by skilled artisans</p>
                    </div>
                    <div class="reveal reveal-delay-300">
                        <div style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;">✨</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Custom Designs</h3>
                        <p>Tailored to your preferences</p>
                    </div>
                    <div class="reveal reveal-delay-400">
                        <div style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;">📦</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Safe Delivery</h3>
                        <p>Secure packaging and delivery</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Statistics Section with Counter Animation -->
        <section class="statistics-section">
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
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section scroll-animate">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">What Our Customers Say</h2>
                    <p class="section-description">Real experiences from real customers</p>
                </div>
                
                <div class="testimonials-grid">
                    <div class="testimonial-card reveal reveal-delay-100">
                        <div class="testimonial-quote">"</div>
                        <div class="testimonial-header">
                            <img src="https://i.pravatar.cc/150?img=12" alt="Rajesh Kumar" class="testimonial-avatar">
                            <div class="testimonial-info">
                                <h4>Rajesh Kumar</h4>
                                <p>Mumbai, Maharashtra</p>
                            </div>
                        </div>
                        <div class="testimonial-stars">
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                        </div>
                        <p class="testimonial-text">
                            The quality of craftsmanship is outstanding! We ordered a custom dining table and the attention 
                            to detail was impeccable. SHRINIX truly understands the art of woodworking.
                        </p>
                    </div>

                    <div class="testimonial-card reveal reveal-delay-200">
                        <div class="testimonial-quote">"</div>
                        <div class="testimonial-header">
                            <img src="https://i.pravatar.cc/150?img=47" alt="Priya Sharma" class="testimonial-avatar">
                            <div class="testimonial-info">
                                <h4>Priya Sharma</h4>
                                <p>Delhi, NCR</p>
                            </div>
                        </div>
                        <div class="testimonial-stars">
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                        </div>
                        <p class="testimonial-text">
                            Absolutely love my new bookshelf! The wood quality is premium and the finish is flawless. 
                            The team was very professional and delivery was on time. Highly recommended!
                        </p>
                    </div>

                    <div class="testimonial-card reveal reveal-delay-300">
                        <div class="testimonial-quote">"</div>
                        <div class="testimonial-header">
                            <img src="https://i.pravatar.cc/150?img=33" alt="Amit Patel" class="testimonial-avatar">
                            <div class="testimonial-info">
                                <h4>Amit Patel</h4>
                                <p>Bangalore, Karnataka</p>
                            </div>
                        </div>
                        <div class="testimonial-stars">
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                        </div>
                        <p class="testimonial-text">
                            Best furniture purchase I've made! The bed frame is sturdy, beautiful, and exactly what I wanted. 
                            The customization options were great and the artisans really brought my vision to life.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Before/After Section -->
        <section class="before-after-section scroll-animate">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Transformations</h2>
                    <p class="section-description">See how we bring your vision to life</p>
                </div>
                
                <div class="before-after-container">
                    <div class="before-after-slider">
                        <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800" alt="Before" class="before-image">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800" alt="After" class="after-image">
                        <div class="slider-handle"></div>
                        <div class="before-label">Before</div>
                        <div class="after-label">After</div>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 2rem;">
                    <p style="max-width: 600px; margin: 0 auto; color: #666;">
                        From concept to completion, we transform spaces with our custom furniture solutions. 
                        Drag the slider to see the difference quality craftsmanship makes.
                    </p>
                </div>
            </div>
        </section>
    `;
}

// About Page
function renderAboutPage() {
    return `
        <section class="section" style="background: white; padding-top: 6rem;">
            <div class="container">
                <div class="section-header">
                    <h1 class="section-title">About SHRINIX</h1>
                    <p class="section-description">Crafting Excellence Since Years</p>
                </div>
                
                <div style="max-width: 800px; margin: 3rem auto; line-height: 1.8;">
                    <div style="position: relative; width: 100%; height: 400px; border-radius: 12px; overflow: hidden; margin-bottom: 2rem;">
                        <video class="about-video" autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;">
                            <source src="video2.mp4" type="video/mp4">
                        </video>
                    </div>
                    
                    <h2 style="font-size: 2rem; color: var(--primary); margin: 2rem 0 1rem;">Our Story</h2>
                    <p style="margin-bottom: 1rem;">
                        SHRINIX was born from a passion for woodworking and a commitment to preserving traditional craftsmanship. 
                        We believe that furniture is more than just functional—it's an expression of artistry and a testament to quality.
                    </p>
                    <p style="margin-bottom: 1rem;">
                        Every piece we create is handcrafted by skilled artisans using premium wood sourced from sustainable forests. 
                        Our dedication to excellence ensures that each item is not just furniture, but a work of art that will be 
                        cherished for generations.
                    </p>

                    <h2 style="font-size: 2rem; color: var(--primary); margin: 2rem 0 1rem;">Our Craftsmanship</h2>
                    <p style="margin-bottom: 1rem;">
                        We use only the finest quality wood including Sheesham, Teak, Mango Wood, and Oak. Our artisans employ 
                        time-honored techniques combined with modern precision to create furniture that's both beautiful and durable.
                    </p>

                    <h2 style="font-size: 2rem; color: var(--primary); margin: 2rem 0 1rem;">Sustainability</h2>
                    <p style="margin-bottom: 1rem;">
                        We're committed to environmental responsibility. All our wood is sourced from certified sustainable forests, 
                        and we use eco-friendly finishes that are safe for your home and the planet.
                    </p>

                    <h2 style="font-size: 2rem; color: var(--primary); margin: 2rem 0 1rem;">Custom Solutions</h2>
                    <p style="margin-bottom: 1rem;">
                        Can't find exactly what you're looking for? We offer custom design services to bring your vision to life. 
                        From dimensions to finish, every detail can be tailored to your preferences.
                    </p>
                </div>
            </div>
        </section>
    `;
}

// Products Page
function renderProductsPage(filterCategory = 'all') {
    const allProducts = getAllProducts();
    const filteredProducts = filterCategory === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === filterCategory);

    return `
        <section class="section" style="padding-top: 6rem; min-height: 80vh;">
            <div class="container">
                <div class="products-header">
                    <div>
                        <h1 class="section-title">Our Products</h1>
                        <p class="section-description">Explore our collection of premium wooden furniture</p>
                    </div>
                    <div class="filter-buttons">
                        <button class="filter-btn ${filterCategory === 'all' ? 'active' : ''}" onclick="filterProducts('all')">All</button>
                        ${categories.map(cat => `
                            <button class="filter-btn ${filterCategory === cat.id ? 'active' : ''}" onclick="filterProducts('${cat.id}')">${cat.name}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="products-grid">
                    ${filteredProducts.map((product, index) => `
                        <div class="product-card reveal reveal-delay-${(index % 5) * 100}">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <div class="product-category">${product.category.replace('-', ' ')}</div>
                                <h3 class="product-name">${product.name}</h3>
                                <div class="product-price">${product.price}</div>
                                <div class="product-actions">
                                    <button class="btn btn-primary btn-small" onclick="router.navigate('product/${product.id}')">View Details</button>
                                    <button class="btn btn-secondary btn-small" onclick="sendProductEnquiry(${JSON.stringify(product).replace(/"/g, '&quot;')})">Enquire</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

// Category Page
function renderCategoryPage(categoryId) {
    const category = getCategoryById(categoryId);
    if (!category) {
        return '<div class="container"><h1>Category not found</h1></div>';
    }

    const products = getProductsByCategory(categoryId);

    return `
        <section class="section" style="padding-top: 6rem; min-height: 80vh;">
            <div class="container">
                <div style="margin-bottom: 3rem;">
                    <button onclick="router.navigate('products')" class="btn" style="color: var(--primary); margin-bottom: 1rem;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                        Back to Products
                    </button>
                    <h1 class="section-title">${category.name}</h1>
                    <p class="section-description">${products.length} products available</p>
                </div>

                <div class="products-grid">
                    ${products.map(product => `
                        <div class="product-card">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <div class="product-category">${product.subcategory}</div>
                                <h3 class="product-name">${product.name}</h3>
                                <div class="product-price">${product.price}</div>
                                <div class="product-actions">
                                    <button class="btn btn-primary btn-small" onclick="router.navigate('product/${product.id}')">View Details</button>
                                    <button class="btn btn-secondary btn-small" onclick="sendProductEnquiry(${JSON.stringify(product).replace(/"/g, '&quot;')})">Enquire</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

// Product Detail Page
function renderProductDetailPage(productId) {
    const product = getProductById(productId);
    if (!product) {
        return '<div class="container"><h1>Product not found</h1></div>';
    }

    const relatedProducts = getProductsByCategory(product.category)
        .filter(p => p.id !== productId)
        .slice(0, 4);

    return `
        <section class="section" style="padding-top: 6rem; background: white;">
            <div class="container">
                <button onclick="history.back()" class="btn" style="color: var(--primary); margin-bottom: 2rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                    Back
                </button>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 4rem;">
                    <div>
                        <!-- Product Image Gallery -->
                        <div class="product-gallery">
                            <div class="main-image-container">
                                <img id="mainProductImage" src="${product.gallery ? product.gallery[0] : product.image}" alt="${product.name}" class="main-product-image">
                            </div>
                            ${product.gallery && product.gallery.length > 1 ? `
                                <div class="thumbnail-container">
                                    ${product.gallery.map((img, index) => `
                                        <img src="${img}" 
                                             alt="${product.name} view ${index + 1}" 
                                             class="thumbnail-image ${index === 0 ? 'active' : ''}" 
                                             onclick="changeMainImage('${img}', event)">
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div>
                        <div class="product-category" style="font-size: 1rem; margin-bottom: 1rem;">${product.subcategory}</div>
                        <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary);">${product.name}</h1>
                        <div style="font-size: 2rem; font-weight: 600; color: var(--primary); margin-bottom: 2rem;">${product.price}</div>
                        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem; color: #666;">${product.description}</p>
                        
                        <div style="margin-bottom: 2rem; padding: 1.5rem; background: var(--secondary); border-radius: 8px;">
                            <h3 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--primary);">Product Specifications</h3>
                            <ul style="list-style: none; padding: 0;">
                                ${product.material ? `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);"><strong>Material:</strong> ${product.material}</li>` : ''}
                                ${product.finish ? `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);"><strong>Finish:</strong> ${product.finish}</li>` : ''}
                                ${product.dimensions ? `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);"><strong>Dimensions:</strong> ${product.dimensions}</li>` : ''}
                                ${product.mattressSize ? `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);"><strong>Mattress Size:</strong> ${product.mattressSize}</li>` : ''}
                                ${product.brand ? `<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);"><strong>Brand:</strong> ${product.brand}</li>` : ''}
                                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">✓ Handcrafted by experts</li>
                                <li style="padding: 0.5rem 0;">✓ Customization available</li>
                            </ul>
                        </div>

                        <div style="display: flex; gap: 1rem;">
                            <button class="btn btn-primary" onclick="sendProductEnquiry(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                Enquire on WhatsApp
                            </button>
                            <button class="btn btn-secondary" onclick="router.navigate('customization')">
                                Customize This
                            </button>
                        </div>
                    </div>
                </div>

                ${relatedProducts.length > 0 ? `
                    <div style="margin-top: 4rem;">
                        <h2 class="section-title" style="margin-bottom: 2rem;">Related Products</h2>
                        <div class="products-grid">
                            ${relatedProducts.map(p => `
                                <div class="product-card">
                                    <img src="${p.image}" alt="${p.name}" class="product-image">
                                    <div class="product-info">
                                        <div class="product-category">${p.subcategory}</div>
                                        <h3 class="product-name">${p.name}</h3>
                                        <div class="product-price">${p.price}</div>
                                        <div class="product-actions">
                                            <button class="btn btn-primary btn-small" onclick="router.navigate('product/${p.id}')">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </section>
    `;
}

// Customization Page
function renderCustomizationPage() {
    return `
        <section class="section" style="padding-top: 6rem; background: white; min-height: 80vh;">
            <div class="container">
                <div class="section-header">
                    <h1 class="section-title">Custom Furniture Design</h1>
                    <p class="section-description">Tell us your vision, and we'll bring it to life</p>
                </div>

                <div style="max-width: 600px; margin: 0 auto;">
                    <form id="customizationForm" onsubmit="handleCustomizationSubmit(event)" style="background: var(--secondary); padding: 2rem; border-radius: 12px;">
                        <div class="form-group">
                            <label class="form-label">Your Name *</label>
                            <input type="text" name="name" class="form-input" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Email *</label>
                            <input type="email" name="email" class="form-input" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Phone Number *</label>
                            <input type="tel" name="phone" class="form-input" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Product Type *</label>
                            <select name="productType" class="form-select" required>
                                <option value="">Select a category</option>
                                <option value="Bedroom Furniture">Bedroom Furniture</option>
                                <option value="Living Room Furniture">Living Room Furniture</option>
                                <option value="Dining Furniture">Dining Furniture</option>
                                <option value="Study/Office Furniture">Study/Office Furniture</option>
                                <option value="Storage Solutions">Storage Solutions</option>
                                <option value="Home Decor">Home Decor</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Dimensions (L x W x H)</label>
                            <input type="text" name="dimensions" class="form-input" placeholder="e.g., 6ft x 3ft x 2ft">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Preferred Wood Type</label>
                            <select name="woodType" class="form-select">
                                <option value="">Select wood type</option>
                                <option value="Sheesham">Sheesham (Rosewood)</option>
                                <option value="Teak">Teak</option>
                                <option value="Mango Wood">Mango Wood</option>
                                <option value="Oak">Oak</option>
                                <option value="Pine">Pine</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Finish</label>
                            <select name="finish" class="form-select">
                                <option value="">Select finish</option>
                                <option value="Natural">Natural</option>
                                <option value="Honey">Honey</option>
                                <option value="Walnut">Walnut</option>
                                <option value="Dark Mahogany">Dark Mahogany</option>
                                <option value="White">White</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Budget Range</label>
                            <input type="text" name="budget" class="form-input" placeholder="e.g., ₹20,000 - ₹50,000">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Additional Details *</label>
                            <textarea name="details" class="form-textarea" required placeholder="Describe your requirements, design preferences, and any specific features you'd like..."></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Submit via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

// Contact Page
function renderContactPage() {
    return `
        <section class="section" style="padding-top: 6rem; background: white; min-height: 80vh;">
            <div class="container">
                <div class="section-header">
                    <h1 class="section-title">Contact Us</h1>
                    <p class="section-description">Get in touch with our team</p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1000px; margin: 0 auto;">
                    <div>
                        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--primary);">Send Us a Message</h2>
                        <form id="contactForm" onsubmit="handleContactSubmit(event)">
                            <div class="form-group">
                                <label class="form-label">Your Name *</label>
                                <input type="text" name="name" class="form-input" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Email *</label>
                                <input type="email" name="email" class="form-input" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Phone Number *</label>
                                <input type="tel" name="phone" class="form-input" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Subject *</label>
                                <input type="text" name="subject" class="form-input" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Message *</label>
                                <textarea name="message" class="form-textarea" required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary" style="width: 100%;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--primary);">Contact Information</h2>
                        
                        <div style="background: var(--secondary); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <div>
                                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Phone</h3>
                                    <p>+91 90013 00244</p>
                                </div>
                            </div>

                            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <div>
                                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Email</h3>
                                    <p>info@shrinix.in</p>
                                </div>
                            </div>

                            <div style="display: flex; align-items: start; gap: 1rem;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <div>
                                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Location</h3>
                                    <p>India</p>
                                </div>
                            </div>
                        </div>

                        <button onclick="sendGeneralWhatsApp()" class="btn btn-primary" style="width: 100%; background: #25D366;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Chat on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Form Handlers
function handleCustomizationSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    sendCustomizationRequest(data);
}

function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    sendContactMessage(data);
}

// Product Filter
function filterProducts(category) {
    window.currentFilter = category;
    document.getElementById('app').innerHTML = renderProductsPage(category);
}
