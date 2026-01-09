document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Icon animation toggle
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Typing Animation
    const typeText = (element, text, speed = 100) => {
        let i = 0;
        element.innerHTML = '';
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    };

    const tagline = document.querySelector('.hero-subtitle');
    if (tagline) {
        // preserve width to prevent layout shift if possible, or just run it
        const originalText = tagline.innerText;
        typeText(tagline, originalText, 50);
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger stats counter if this is the stats section or contains stats
                const stats = entry.target.querySelectorAll('.stat-number');
                if (stats.length > 0) {
                    stats.forEach(stat => {
                        const target = +stat.getAttribute('data-target');
                        animateValue(stat, 0, target, 2000);
                        // Ensure it only runs once by removing class or attribute, 
                        // but IntersectionObserver unobserves anyway if we tell it to.
                        // Here we attached observer to .fade-in parent.
                        // If parent unobserved, it won't run again.
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close others
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // Form Submission (Mock)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Sent Successfully!';
                btn.style.backgroundColor = '#28a745';

                setTimeout(() => {
                    form.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    });

    // Carousel (Simple Horizontal Scroll)
    const track = document.querySelector('.services-track');
    if (track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.classList.add('active');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.classList.remove('active');
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.classList.remove('active');
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            track.scrollLeft = scrollLeft - walk;
        });
    }
});
