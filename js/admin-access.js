// Hidden Admin Access - Secret Activation
// Triple-click on copyright text to reveal admin button

(function () {
    let clickCount = 0;
    let clickTimer = null;
    const copyrightText = document.getElementById('copyrightText');
    const adminButton = document.getElementById('adminAccess');

    if (!copyrightText || !adminButton) return;

    // Triple-click detection
    copyrightText.addEventListener('click', function () {
        clickCount++;

        // Clear previous timer
        if (clickTimer) {
            clearTimeout(clickTimer);
        }

        // Check if triple-clicked
        if (clickCount === 3) {
            // Show admin button
            adminButton.style.display = 'flex';
            setTimeout(() => {
                adminButton.classList.add('visible');
            }, 10);

            // Optional: Show a subtle notification
            showAdminNotification();

            // Reset click count
            clickCount = 0;
        } else {
            // Reset after 500ms if not triple-clicked
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 500);
        }
    });

    // Alternative: Keyboard shortcut (Ctrl+Shift+A)
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            adminButton.style.display = 'flex';
            setTimeout(() => {
                adminButton.classList.add('visible');
            }, 10);
            showAdminNotification();
        }
    });

    // Hide admin button when clicking elsewhere
    document.addEventListener('click', function (e) {
        if (!adminButton.contains(e.target) && !copyrightText.contains(e.target)) {
            if (adminButton.classList.contains('visible')) {
                // Optional: Keep it visible once activated
                // Uncomment below to auto-hide
                // adminButton.classList.remove('visible');
                // setTimeout(() => {
                //     adminButton.style.display = 'none';
                // }, 400);
            }
        }
    });

    function showAdminNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #2c1a10 0%, #5a3e2b 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(44, 26, 16, 0.4);
            z-index: 10000;
            font-size: 0.9rem;
            font-weight: 500;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        `;
        notification.innerHTML = '🔓 Admin access unlocked';
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
})();
