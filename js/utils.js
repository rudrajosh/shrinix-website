// WhatsApp Utility
const WHATSAPP_NUMBER = '919001300244';

function sendWhatsAppMessage(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function sendProductEnquiry(product) {
    const message = `Hi, I'm interested in:\n\nProduct: ${product.name}\nCategory: ${product.category}\nPrice: ${product.price}\n\nPlease provide more details.`;
    sendWhatsAppMessage(message);
}

function sendCustomizationRequest(formData) {
    const message = `Customization Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct Type: ${formData.productType}\nDimensions: ${formData.dimensions}\nWood Type: ${formData.woodType}\nFinish: ${formData.finish}\nBudget: ${formData.budget}\n\nAdditional Details:\n${formData.details}`;
    sendWhatsAppMessage(message);
}

function sendContactMessage(formData) {
    const message = `Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    sendWhatsAppMessage(message);
}

function sendGeneralWhatsApp() {
    const message = `Hi! I'm interested in SHRINIX wooden furniture and handicrafts. I'd like to know more about your products.`;
    sendWhatsAppMessage(message);
}

// Utility Functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function formatPrice(price) {
    return price;
}

// Product Gallery Functions
function changeMainImage(imageSrc, event) {
    // Update main image
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-image');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
}
