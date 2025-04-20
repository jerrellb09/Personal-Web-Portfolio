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
            console.log('Form submission success detected!');
            
            // Small delay to ensure Toast is ready
            setTimeout(() => {
                try {
                    // Show success toast
                    const toastElement = document.getElementById('formSuccessToast');
                    
                    // If toast element doesn't exist, create it programmatically
                    if (!toastElement) {
                        console.log('Toast element not found, creating one programmatically');
                        
                        // Create toast container if it doesn't exist
                        let toastContainer = document.querySelector('.toast-container');
                        if (!toastContainer) {
                            toastContainer = document.createElement('div');
                            toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
                            document.body.appendChild(toastContainer);
                        }
                        
                        // Create toast element
                        const newToastElement = document.createElement('div');
                        newToastElement.id = 'formSuccessToast';
                        newToastElement.className = 'toast';
                        newToastElement.setAttribute('role', 'alert');
                        newToastElement.setAttribute('aria-live', 'assertive');
                        newToastElement.setAttribute('aria-atomic', 'true');
                        newToastElement.setAttribute('data-bs-delay', '5000');
                        
                        // Toast header
                        const toastHeader = document.createElement('div');
                        toastHeader.className = 'toast-header bg-success text-white';
                        toastHeader.innerHTML = `
                            <i class="fas fa-check-circle me-2"></i>
                            <strong class="me-auto">Success!</strong>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                        `;
                        
                        // Toast body
                        const toastBody = document.createElement('div');
                        toastBody.className = 'toast-body';
                        toastBody.innerHTML = `
                            <div class="d-flex align-items-center">
                                <i class="fas fa-envelope-open-text me-3 fs-4 text-success"></i>
                                <div>Your message has been sent successfully. I'll get back to you soon!</div>
                            </div>
                        `;
                        
                        // Assemble toast
                        newToastElement.appendChild(toastHeader);
                        newToastElement.appendChild(toastBody);
                        toastContainer.appendChild(newToastElement);
                        
                        // Use the new element
                        const toast = new bootstrap.Toast(newToastElement);
                        console.log('Toast programmatically created and initialized, showing now...');
                        toast.show();
                    } else {
                        console.log('Toast element found:', toastElement);
                        const toast = new bootstrap.Toast(toastElement);
                        console.log('Toast initialized, showing now...');
                        toast.show();
                    }
                    console.log('Toast show method called');
                } catch (error) {
                    console.error('Error showing toast:', error);
                    // Fallback: alert
                    alert('Your message has been sent successfully! Thank you for reaching out.');
                }
                
                // Remove the query parameter from URL without refreshing page
                const newUrl = window.location.pathname + window.location.hash;
                window.history.replaceState({}, document.title, newUrl);
                
                // Scroll to contact if we're not already there
                if (!window.location.hash.includes('contact')) {
                    document.getElementById('contact').scrollIntoView();
                }
            }, 500);
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
            e.preventDefault(); // Prevent form from submitting normally
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            const form = this;
            
            // Update button state
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
            
            // Local environment form submission demo
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {
                // Simulate form submission
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                    
                    // Show success toast
                    showSuccessToast();
                    
                    // Reset form after delay
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                        contactForm.reset();
                    }, 2000);
                }, 1500);
            } else {
                // Production environment - Use fetch to submit the form to Netlify
                try {
                    const formData = new FormData(form);
                    
                    // Add form-name explicitly (important for Netlify)
                    formData.append("form-name", "contact-form");
                    
                    // Convert FormData to URL-encoded string
                    const searchParams = new URLSearchParams();
                    for (const pair of formData) {
                        searchParams.append(pair[0], pair[1]);
                    }
                    
                    // Log the form data for debugging
                    console.log("Submitting form with data:", searchParams.toString());
                    
                    // Send the form data to Netlify
                    fetch("/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: searchParams.toString()
                    })
                    .then(response => {
                        if (response.ok) {
                            submitButton.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                            
                            // Show success toast
                            showSuccessToast();
                            
                            // Reset form after delay
                            setTimeout(() => {
                                submitButton.disabled = false;
                                submitButton.textContent = originalText;
                                contactForm.reset();
                            }, 2000);
                        } else {
                            throw new Error('Form submission failed');
                        }
                    })
                    .catch(error => {
                        console.error('Error submitting form:', error);
                        submitButton.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>Error!';
                        
                        // Show error toast
                        showErrorToast();
                        
                        // Reset button after delay
                        setTimeout(() => {
                            submitButton.disabled = false;
                            submitButton.textContent = originalText;
                        }, 2000);
                    });
                } catch (error) {
                    console.error('Form submission error:', error);
                    submitButton.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>Error!';
                    showErrorToast();
                    
                    // Reset button after delay
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                    }, 2000);
                }
            }
        });
        
        // Function to show success toast
        function showSuccessToast() {
            try {
                // Show success toast
                const toastElement = document.getElementById('formSuccessToast');
                
                // If toast element doesn't exist, create it programmatically
                if (!toastElement) {
                    console.log('Toast element not found, creating one programmatically');
                    
                    // Create toast container if it doesn't exist
                    let toastContainer = document.querySelector('.toast-container');
                    if (!toastContainer) {
                        toastContainer = document.createElement('div');
                        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
                        document.body.appendChild(toastContainer);
                    }
                    
                    // Create toast element
                    const newToastElement = document.createElement('div');
                    newToastElement.id = 'formSuccessToast';
                    newToastElement.className = 'toast';
                    newToastElement.setAttribute('role', 'alert');
                    newToastElement.setAttribute('aria-live', 'assertive');
                    newToastElement.setAttribute('aria-atomic', 'true');
                    newToastElement.setAttribute('data-bs-delay', '5000');
                    
                    // Toast header
                    const toastHeader = document.createElement('div');
                    toastHeader.className = 'toast-header bg-success text-white';
                    toastHeader.innerHTML = `
                        <i class="fas fa-check-circle me-2"></i>
                        <strong class="me-auto">Success!</strong>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                    `;
                    
                    // Toast body
                    const toastBody = document.createElement('div');
                    toastBody.className = 'toast-body';
                    toastBody.innerHTML = `
                        <div class="d-flex align-items-center">
                            <i class="fas fa-envelope-open-text me-3 fs-4 text-success"></i>
                            <div>Your message has been sent successfully. I'll get back to you soon!</div>
                        </div>
                    `;
                    
                    // Assemble toast
                    newToastElement.appendChild(toastHeader);
                    newToastElement.appendChild(toastBody);
                    toastContainer.appendChild(newToastElement);
                    
                    // Use the new element
                    const toast = new bootstrap.Toast(newToastElement);
                    toast.show();
                } else {
                    const toast = new bootstrap.Toast(toastElement);
                    toast.show();
                }
            } catch (error) {
                console.error('Error showing toast:', error);
                // Fallback: alert
                alert('Your message has been sent successfully! Thank you for reaching out.');
            }
        }
        
        // Function to show error toast
        function showErrorToast() {
            try {
                // Create toast container if it doesn't exist
                let toastContainer = document.querySelector('.toast-container');
                if (!toastContainer) {
                    toastContainer = document.createElement('div');
                    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
                    document.body.appendChild(toastContainer);
                }
                
                // Create toast element
                const errorToastElement = document.createElement('div');
                errorToastElement.id = 'formErrorToast';
                errorToastElement.className = 'toast';
                errorToastElement.setAttribute('role', 'alert');
                errorToastElement.setAttribute('aria-live', 'assertive');
                errorToastElement.setAttribute('aria-atomic', 'true');
                errorToastElement.setAttribute('data-bs-delay', '5000');
                
                // Toast header
                const toastHeader = document.createElement('div');
                toastHeader.className = 'toast-header bg-danger text-white';
                toastHeader.innerHTML = `
                    <i class="fas fa-exclamation-circle me-2"></i>
                    <strong class="me-auto">Error</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                `;
                
                // Toast body
                const toastBody = document.createElement('div');
                toastBody.className = 'toast-body';
                toastBody.innerHTML = `
                    <div class="d-flex align-items-center">
                        <i class="fas fa-times-circle me-3 fs-4 text-danger"></i>
                        <div>There was an error sending your message. Please try again later.</div>
                    </div>
                `;
                
                // Assemble toast
                errorToastElement.appendChild(toastHeader);
                errorToastElement.appendChild(toastBody);
                toastContainer.appendChild(errorToastElement);
                
                // Show toast
                const toast = new bootstrap.Toast(errorToastElement);
                toast.show();
            } catch (error) {
                console.error('Error showing error toast:', error);
                // Fallback: alert
                alert('There was an error sending your message. Please try again later.');
            }
        }
    }
});