// Main JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    // Initialize particles.js with lava lamp effect
    if (document.getElementById('particles-js')) {
        // Direct configuration instead of loading from file
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 900
                    }
                },
                "color": {
                    "value": ["#ff00cc", "#33ccff", "#00ff9f", "#ffcc00", "#ff6d6d"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.5,
                        "opacity_min": 0.2,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": true,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 200,
                        "size": 7,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    }
                }
            },
            "retina_detect": true
        });
        
        // Add lava lamp color shifting effect
        setTimeout(() => {
            const canvas = document.querySelector('#particles-js canvas');
            if (canvas) {
                // Color shift animation
                let hueRotate = 0;
                setInterval(() => {
                    hueRotate = (hueRotate + 1) % 360;
                    canvas.style.filter = `hue-rotate(${hueRotate}deg)`;
                }, 100);
            }
        }, 500); // Wait for canvas to be created
    }

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Typed.js for typewriter effect
    if (document.getElementById('typewriter-text')) {
        const options = {
            strings: ['Software Engineer', 'Web Developer', 'Problem Solver', 'Creative Thinker'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        };
        
        new Typed('#typewriter-text', options);
    }

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to Top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navigation links smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (this.getAttribute('href') !== '#') {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Current year for copyright in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Form submission with animation and toast notification
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Check if we came from a form submission (using URL parameters)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('form-submission') === 'success') {
            // Show success toast
            const toast = new bootstrap.Toast(document.getElementById('formSuccessToast'));
            toast.show();
            
            // Remove the query parameter from URL without refreshing page
            const newUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, newUrl);
            
            // Scroll to contact if we're not already there
            if (!window.location.hash.includes('contact')) {
                document.getElementById('contact').scrollIntoView();
            }
        }
        
        // For local viewing - demo button to show toast
        const demoToastButton = document.createElement('button');
        demoToastButton.textContent = 'Demo Toast';
        demoToastButton.classList.add('btn', 'btn-sm', 'btn-secondary', 'position-fixed', 'top-0', 'end-0', 'm-3');
        demoToastButton.style.zIndex = '9999';
        demoToastButton.style.opacity = '0.7';
        demoToastButton.addEventListener('click', function() {
            const toast = new bootstrap.Toast(document.getElementById('formSuccessToast'));
            toast.show();
        });
        
        // Only show demo button in local environment
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {
            document.body.appendChild(demoToastButton);
        }
        
        contactForm.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
            
            // Local environment form submission demo
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {
                e.preventDefault(); // Prevent actual submission
                
                // Simulate form submission
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                    
                    // Show success toast
                    const toast = new bootstrap.Toast(document.getElementById('formSuccessToast'));
                    toast.show();
                    
                    // Reset form after delay
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                        contactForm.reset();
                    }, 2000);
                }, 1500);
            }
            
            // When deployed to Netlify, the actual form submission is handled by Netlify
            // The code above is just for local testing
        });
    }
});