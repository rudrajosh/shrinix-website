// Secure Authentication Module for SHRINIX Admin Panel
// This file contains hashed credentials and authentication functions

// ============================================
// SECURITY CONFIGURATION
// ============================================

// Credentials (DO NOT store plain text in production!)
// Username: Shrinix
// Password: shrinix@harish
// These are hashed for security

const AUTH_CONFIG = {
    // Pre-computed hashes (generated offline for security)
    // In production, use a proper backend authentication system
    validUsers: {
        'Shrinix': {
            passwordHash: 'dfdf8e9fa78389f6374f76f2448337ba21aebc9bd58287f40091546f119936c7',
            salt: 'SHRINIX_SECURE_SALT_2026'
        }
    }
};

// ============================================
// HASHING FUNCTIONS
// ============================================

/**
 * Hash a string using SHA-256
 * @param {string} str - String to hash
 * @returns {Promise<string>} - Hexadecimal hash
 */
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

/**
 * Verify user credentials
 * @param {string} username - Provided username
 * @param {string} password - Provided password
 * @returns {Promise<boolean>} - True if credentials are valid
 */
async function verifyCredentials(username, password) {
    try {
        // Check if user exists
        const user = AUTH_CONFIG.validUsers[username];
        if (!user) {
            // Add delay to prevent username enumeration
            await new Promise(resolve => setTimeout(resolve, 1000));
            return false;
        }

        // Hash the provided password with salt
        const passwordWithSalt = password + user.salt;
        const passwordHash = await hashString(passwordWithSalt);

        // Compare hashes
        const isValid = passwordHash === user.passwordHash;

        // Add delay to prevent timing attacks
        if (!isValid) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        return isValid;
    } catch (error) {
        console.error('Authentication error:', error);
        return false;
    }
}

/**
 * Generate a secure authentication token
 * @returns {string} - Base64 encoded token
 */
function generateAuthToken() {
    const timestamp = Date.now();
    const random = crypto.getRandomValues(new Uint8Array(16));
    const randomHex = Array.from(random).map(b => b.toString(16).padStart(2, '0')).join('');
    return btoa(`${timestamp}-${randomHex}`);
}

/**
 * Validate an authentication token
 * @param {string} token - Token to validate
 * @param {number} maxAge - Maximum age in milliseconds
 * @returns {boolean} - True if token is valid
 */
function validateAuthToken(token, maxAge) {
    try {
        const decoded = atob(token);
        const [timestamp] = decoded.split('-');
        const tokenAge = Date.now() - parseInt(timestamp);
        return tokenAge < maxAge && tokenAge >= 0;
    } catch {
        return false;
    }
}

// ============================================
// UTILITY: Generate Hash for New Passwords
// ============================================

/**
 * Helper function to generate password hash (for admin use)
 * Usage: Call this in browser console to generate hash for new password
 * Example: await generatePasswordHash('newpassword', 'SHRINIX_SECURE_SALT_2026')
 */
async function generatePasswordHash(password, salt) {
    const passwordWithSalt = password + salt;
    const hash = await hashString(passwordWithSalt);
    console.log('Password Hash:', hash);
    return hash;
}

// Make functions available globally
window.verifyCredentials = verifyCredentials;
window.generateAuthToken = generateAuthToken;
window.validateAuthToken = validateAuthToken;
window.generatePasswordHash = generatePasswordHash; // For admin use only
