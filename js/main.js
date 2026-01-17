// ============================================
// MONTE CARLO SPORTS - MAIN JS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.9)';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.model-card, .step, .tier, .not-item, .output-example').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Stagger animation delay for grid items
    document.querySelectorAll('.models-grid .model-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });
    
    document.querySelectorAll('.tiers-grid .tier').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });
    
    document.querySelectorAll('.not-grid .not-item').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });
    
    // Stat counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        countObserver.observe(heroStats);
    }
    
    function animateStats() {
        statNumbers.forEach(el => {
            const text = el.textContent;
            
            if (text.includes('K')) {
                animateValue(el, 0, 100, 1500, 'K+');
            } else if (text === '3') {
                animateValue(el, 0, 3, 1200);
            } else if (text === '0') {
                // Keep 0 static for effect
                el.style.transition = 'color 0.3s';
                setTimeout(() => {
                    el.style.color = '#FFD700';
                }, 1500);
            }
        });
    }
    
    function animateValue(el, start, end, duration, suffix = '') {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quart for smooth deceleration
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (end - start) * easeOutQuart);
            
            el.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Parallax effect for hero background (subtle)
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }
    
    // Add hover effect sounds (optional - commented out)
    // const hoverSound = new Audio('path/to/hover.mp3');
    // document.querySelectorAll('.btn, .model-card').forEach(el => {
    //     el.addEventListener('mouseenter', () => {
    //         hoverSound.currentTime = 0;
    //         hoverSound.volume = 0.1;
    //         hoverSound.play();
    //     });
    // });
    
    console.log('🎰 Monte Carlo Sports loaded');
    console.log('📊 100,000 simulations. 0 locks. Just math.');
});

// Easter egg
console.log('%c MONTE CARLO SPORTS ', 'background: #FFD700; color: #000; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Don\'t guess. Simulate. ', 'color: #00d4ff; font-size: 14px;');
