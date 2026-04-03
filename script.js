document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation & Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links li a');
    const navbar = document.getElementById('navbar');

    // Toggle Menu Open/Close
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Transform hamburger to 'X' (Optional visual tweak)
        const spans = hamburger.querySelectorAll('span');
        if(navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Reset hamburger visual
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Navbar background opacity on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- Gallery Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const closeLightboxBtn = document.querySelector('.close-lightbox');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            // Use higher resolution version for lightbox if available, or current src
            lightboxImg.src = img.src.replace('&w=600', '&w=1200'); 
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }

    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // --- Contact Form Handling ---
    const form = document.getElementById('bookingForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            // Gather details
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
            
            // Success Message Placeholder
            alert(`Thanks, ${name}! Your request for ${service} has been received. We will contact you shortly to confirm your booking date and time.`);
            
            // Reset
            form.reset();
        });
    }
});
