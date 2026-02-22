/**
 * Enhanced Artisan Loader - All 10 Premium Features
 * 1. Sound Design
 * 2. Multiple Craft Animations
 * 3. Advanced Particle Effects
 * 4. Progress Percentage
 * 5. Skip Button
 * 6. 3D Depth Effects
 * 7. Handwritten Typography
 * 8. Cultural Patterns
 * 9. Loading State Intelligence
 * 10. Micro-interactions
 */

(function () {
    'use strict';

    // ========================================
    // CONFIGURATION & STATE
    // ========================================

    const config = {
        loaderDuration: 6000,
        factRotationInterval: 2000,
        skipButtonDelay: 2000,
        soundEnabled: true,
        hasSeenLoader: localStorage.getItem('shrinix_loader_seen') === 'true'
    };

    const state = {
        currentFactIndex: 0,
        loadProgress: 0,
        isSkipped: false,
        isMuted: !config.soundEnabled,
        selectedCraft: null
    };

    // DOM Elements
    const loader = document.getElementById('loader');
    const loaderContent = document.getElementById('loaderContent');
    const skipButton = document.getElementById('skipLoader');
    const muteButton = document.getElementById('muteLoader');
    const progressPercentage = document.getElementById('progressPercentage');
    const craftAnimation = document.getElementById('craftAnimation');
    const craftFacts = document.querySelectorAll('.craft-fact');
    const interactiveParticles = document.querySelectorAll('.interactive-particle');

    // Audio Elements
    const ambientSound = document.getElementById('ambientSound');
    const chimeSound = document.getElementById('chimeSound');
    const whooshSound = document.getElementById('whooshSound');

    // ========================================
    // 2. MULTIPLE CRAFT ANIMATIONS
    // ========================================

    function selectRandomCraft() {
        const crafts = ['pottery', 'loom', 'carving', 'mandala'];
        const randomCraft = crafts[Math.floor(Math.random() * crafts.length)];
        state.selectedCraft = randomCraft;

        // Hide all craft SVGs
        const allCraftSvgs = document.querySelectorAll('.craft-svg');
        allCraftSvgs.forEach(svg => svg.classList.add('hidden'));

        // Show selected craft
        const selectedSvg = document.querySelector(`.craft-svg[data-craft="${randomCraft}"]`);
        if (selectedSvg) {
            selectedSvg.classList.remove('hidden');
        }

        console.log(`Selected craft: ${randomCraft}`);
    }

    // ========================================
    // 1. SOUND DESIGN
    // ========================================

    function initSound() {
        // Set initial mute state
        updateMuteButton();

        // Start ambient sound if not muted
        if (!state.isMuted && ambientSound) {
            ambientSound.volume = 0.2;
            ambientSound.play().catch(e => console.log('Ambient sound autoplay prevented'));
        }
    }

    function playChime() {
        if (!state.isMuted && chimeSound) {
            chimeSound.volume = 0.3;
            chimeSound.currentTime = 0;
            chimeSound.play().catch(e => console.log('Chime sound failed'));
        }
    }

    function playWhoosh() {
        if (!state.isMuted && whooshSound) {
            whooshSound.volume = 0.4;
            whooshSound.play().catch(e => console.log('Whoosh sound failed'));
        }
    }

    function toggleMute() {
        state.isMuted = !state.isMuted;
        updateMuteButton();

        if (state.isMuted) {
            if (ambientSound) ambientSound.pause();
        } else {
            if (ambientSound) {
                ambientSound.volume = 0.2;
                ambientSound.play().catch(e => console.log('Ambient sound failed'));
            }
        }
    }

    function updateMuteButton() {
        if (!muteButton) return;

        const soundOn = muteButton.querySelector('.sound-on');
        const soundOff = muteButton.querySelector('.sound-off');

        if (!soundOn || !soundOff) return;

        if (state.isMuted) {
            soundOn.classList.add('hidden');
            soundOff.classList.remove('hidden');
        } else {
            soundOn.classList.remove('hidden');
            soundOff.classList.add('hidden');
        }
    }

    // ========================================
    // 3. ADVANCED PARTICLE EFFECTS
    // ========================================

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    function initParticleInteractions() {
        document.addEventListener('mousemove', (e) => {
            if (!loader || loader.style.opacity === '0') return;

            mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

            // Interactive particles react to cursor
            interactiveParticles.forEach((particle, index) => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;

                const deltaX = e.clientX - particleX;
                const deltaY = e.clientY - particleY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    const moveX = (deltaX / distance) * force * -30;
                    const moveY = (deltaY / distance) * force * -30;
                    particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.5})`;
                } else {
                    particle.style.transform = '';
                }
            });
        });

        // Click to scatter particles
        document.addEventListener('click', (e) => {
            if (!loader || loader.style.opacity === '0') return;

            interactiveParticles.forEach(particle => {
                const randomX = (Math.random() - 0.5) * 100;
                const randomY = (Math.random() - 0.5) * 100;
                particle.style.transition = 'transform 0.5s ease-out';
                particle.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.5)`;

                setTimeout(() => {
                    particle.style.transition = 'transform 0.8s ease-out';
                    particle.style.transform = '';
                }, 500);
            });
        });
    }

    // ========================================
    // 6. 3D DEPTH EFFECTS (Parallax)
    // ========================================

    function animateParallax() {
        if (!loaderContent) return;

        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        loaderContent.style.transform = `translate(${currentX}px, ${currentY}px) translateZ(0)`;

        requestAnimationFrame(animateParallax);
    }

    // ========================================
    // 10. MICRO-INTERACTIONS
    // ========================================

    function initMicroInteractions() {
        // Pottery glow on hover
        const craftSvgs = document.querySelectorAll('.craft-svg');
        craftSvgs.forEach(svg => {
            svg.addEventListener('mouseenter', () => {
                svg.style.filter = 'drop-shadow(0 0 30px rgba(245, 242, 237, 0.8))';
            });

            svg.addEventListener('mouseleave', () => {
                svg.style.filter = 'drop-shadow(0 0 20px rgba(245, 242, 237, 0.3))';
            });
        });

        // Craft facts expand on hover
        craftFacts.forEach(fact => {
            fact.addEventListener('mouseenter', () => {
                fact.style.transform = 'translateY(0) scale(1.05)';
            });

            fact.addEventListener('mouseleave', () => {
                fact.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // ========================================
    // CRAFT FACTS ROTATION
    // ========================================

    function rotateFacts() {
        if (!craftFacts.length) return;

        // Remove active class from all
        craftFacts.forEach(fact => fact.classList.remove('active'));

        // Add active class to current
        craftFacts[state.currentFactIndex].classList.add('active');

        // Play chime sound
        playChime();

        // Move to next fact
        state.currentFactIndex = (state.currentFactIndex + 1) % craftFacts.length;
    }

    // ========================================
    // 4. PROGRESS PERCENTAGE (Smart Loading)
    // ========================================

    function updateProgress() {
        const startTime = Date.now();
        const duration = config.loaderDuration;

        function update() {
            if (state.isSkipped) return;

            const elapsed = Date.now() - startTime;
            const progress = Math.min((elapsed / duration) * 100, 100);
            state.loadProgress = progress;

            // Show percentage if loading takes longer than expected
            if (elapsed > 3000 && progressPercentage) {
                progressPercentage.classList.add('visible');
                const percentageNumber = progressPercentage.querySelector('.percentage-number');
                if (percentageNumber) {
                    percentageNumber.textContent = Math.floor(progress);
                }
            }

            if (progress < 100) {
                requestAnimationFrame(update);
            }
        }

        update();
    }

    // ========================================
    // 9. LOADING STATE INTELLIGENCE
    // ========================================

    function detectLoadingState() {
        // Check if all resources are loaded
        const images = document.querySelectorAll('img');
        const totalResources = images.length;
        let loadedResources = 0;

        if (totalResources === 0) {
            return Promise.resolve();
        }

        return new Promise(resolve => {
            images.forEach(img => {
                if (img.complete) {
                    loadedResources++;
                } else {
                    img.addEventListener('load', () => {
                        loadedResources++;
                        if (loadedResources === totalResources) {
                            resolve();
                        }
                    });
                    img.addEventListener('error', () => {
                        loadedResources++;
                        if (loadedResources === totalResources) {
                            resolve();
                        }
                    });
                }
            });

            if (loadedResources === totalResources) {
                resolve();
            }
        });
    }

    // ========================================
    // 5. SKIP BUTTON
    // ========================================

    function skipLoader() {
        state.isSkipped = true;
        playWhoosh();

        // Mark as seen
        localStorage.setItem('shrinix_loader_seen', 'true');

        // Fade out immediately
        if (loader) {
            loader.style.animation = 'loaderFadeOut 0.5s ease-in-out forwards';
            setTimeout(() => {
                loader.style.display = 'none';
                if (ambientSound) ambientSound.pause();
            }, 500);
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    function init() {
        // Check if user has seen loader before
        if (config.hasSeenLoader) {
            // Reduce duration for returning visitors
            config.loaderDuration = 3000;
        }

        // 2. Select random craft animation
        selectRandomCraft();

        // 1. Initialize sound
        initSound();

        // 3. Initialize particle interactions
        initParticleInteractions();

        // 6. Start parallax animation
        animateParallax();

        // 10. Initialize micro-interactions
        initMicroInteractions();

        // Start fact rotation
        const factInterval = setInterval(() => {
            if (state.isSkipped) {
                clearInterval(factInterval);
                return;
            }
            rotateFacts();
        }, config.factRotationInterval);

        // 4. Update progress
        updateProgress();

        // 9. Detect loading state
        detectLoadingState().then(() => {
            console.log('All resources loaded');
        });

        // 5. Skip button event
        if (skipButton) {
            skipButton.addEventListener('click', skipLoader);
        }

        // Mute button event
        if (muteButton) {
            muteButton.addEventListener('click', toggleMute);
        }

        // Auto-hide loader after duration
        setTimeout(() => {
            if (!state.isSkipped) {
                playWhoosh();
                localStorage.setItem('shrinix_loader_seen', 'true');

                if (loader) {
                    setTimeout(() => {
                        loader.style.display = 'none';
                        if (ambientSound) ambientSound.pause();
                    }, 800);
                }
            }
        }, config.loaderDuration);
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
