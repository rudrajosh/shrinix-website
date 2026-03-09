// Wrap in IIFE to prevent variables from leaking to global scope
(function () {
    // Obfuscated configuration to prevent simple inspection
    // Values are base64 encoded strings
    const _0x1a2b = {
        'U2hyaW5peA==': {
            p: 'ZGZkZjhlOWZhNzgzODlmNjM3NGY3NmYyNDQ4MzM3YmEyMWFlYmM5YmQ1ODI4N2Y0MDA5MTU0NmYxMTk5MzZjNw==',
            s: 'U0hSSU5JWF9TRUNVUkVfU0FMVF8yMDI2'
        }
    };

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
            // Encode provided username to check against obfuscated store
            const encodedUser = btoa(username);
            const user = _0x1a2b[encodedUser];

            if (!user) {
                // Add delay to prevent username enumeration
                await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));
                return false;
            }

            // Decode salt and expected hash at runtime
            const salt = atob(user.s);
            const expectedHash = atob(user.p);

            // Hash the provided password with salt
            const passwordWithSalt = password + salt;
            const passwordHash = await hashString(passwordWithSalt);

            // Compare hashes
            const isValid = passwordHash === expectedHash;

            // Add delay to prevent timing attacks
            if (!isValid) {
                await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));
            }

            return isValid;
        } catch (error) {
            console.error('Authentication process failed securely.');
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
     */
    async function generatePasswordHash(password, salt) {
        const passwordWithSalt = password + salt;
        const hash = await hashString(passwordWithSalt);
        console.log('Password Hash:', hash);
        return hash;
    }

    // Make strictly necessary functions available globally
    window.verifyCredentials = verifyCredentials;
    window.generateAuthToken = generateAuthToken;
    window.validateAuthToken = validateAuthToken;

    // generatePasswordHash is removed from window to prevent inspection of the hashing algorithm easily.
})();