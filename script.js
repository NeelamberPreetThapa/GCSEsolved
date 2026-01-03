// Managing Conversion Events and UI Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Simple Scroll Animation for Hero CTA
    const heroBtn = document.querySelector('.btn-primary');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            // Logic for a sticky "Book Now" button could go here
        }
    });

    // 3. Form Submission Placeholder
    // Replace this with actual backend or WhatsApp logic
    const handleTrialBooking = () => {
        console.log("Trial booking initiated...");
        // Add Lead Tracking or Modal Popup logic
    };
});


document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-4', 'shadow-sm');
            header.classList.remove('py-6');
        } else {
            header.classList.remove('py-4', 'shadow-sm');
            header.classList.add('py-6');
        }
    });

    // 2. Simple Reveal on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // If you add .reveal class to any element, it will animate in
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. CTA Click Tracking (Placeholder for conversion tracking)
    const ctaButtons = document.querySelectorAll('a[href="#book"]');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("Conversion funnel started: Free Trial Clicked");
        });
    });
});