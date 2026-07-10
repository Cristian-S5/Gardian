// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// News Slider Logic
const newsTrack = document.getElementById('news-track');
const newsDots = document.querySelectorAll('#news-dots .dot');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.news-slide').length;

if (newsTrack && totalSlides > 0) {
    function updateSlider() {
        newsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        newsDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Auto slide every 3 seconds
    let sliderInterval = setInterval(nextSlide, 3000);

    // Pause on hover (desktop) and handle swipe (mobile)
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        // Hover pause
        sliderWrapper.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        sliderWrapper.addEventListener('mouseleave', () => sliderInterval = setInterval(nextSlide, 3000));

        // Swipe handling
        let touchStartX = 0;
        sliderWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        sliderWrapper.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 50) {
                clearInterval(sliderInterval);
                if (diff < 0) {
                    nextSlide(); // swipe left -> next
                } else {
                    // previous slide
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                    updateSlider();
                }
                // Restart auto slide
                sliderInterval = setInterval(nextSlide, 3000);
            }
        });
    }

    // Dot clicks
    newsDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
}

// Form submission handler (mock)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = form.querySelector('button');
        const originalText = button.innerText;
        
        button.innerText = 'Enviando...';
        button.disabled = true;

        setTimeout(() => {
            button.innerText = '¡Enviado con éxito!';
            button.style.backgroundColor = '#4CAF50';
            form.reset();
            
            setTimeout(() => {
                button.innerText = originalText;
                button.style.backgroundColor = '';
                button.disabled = false;
            }, 3000);
        }, 1500);
    });
});
