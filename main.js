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
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
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

    // Auto slide every 5 seconds
    let sliderInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        sliderWrapper.addEventListener('mouseleave', () => sliderInterval = setInterval(nextSlide, 5000));
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
