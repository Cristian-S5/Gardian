// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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
