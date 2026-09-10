// Language switching functionality
function switchLanguage(lang) {
    if (lang === 'ja') {
        // Hide English, show Japanese
        document.querySelectorAll('[id$="-en"]').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('[id$="-ja"]').forEach(el => el.classList.remove('hidden'));
        document.documentElement.lang = 'ja';
        
        // Update buttons
        const btns = document.querySelectorAll('.lang-btn');
        if(btns.length >= 2) {
            btns[0].classList.add('active'); // Japanese button
            btns[1].classList.remove('active'); // English button
        }
    } else {
        // Hide Japanese, show English
        document.querySelectorAll('[id$="-ja"]').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('[id$="-en"]').forEach(el => el.classList.remove('hidden'));
        document.documentElement.lang = 'en';
        
        // Update buttons
        const btns = document.querySelectorAll('.lang-btn');
        if(btns.length >= 2) {
            btns[0].classList.remove('active');
            btns[1].classList.add('active');
        }
    }
}

// Global functions for HTML onclick
window.showJapanese = function() {
    switchLanguage('ja');
};

window.showEnglish = function() {
    switchLanguage('en');
};

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Auto-detect language
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.toLowerCase().startsWith('ja')) {
        switchLanguage('ja');
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(249, 246, 240, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(249, 246, 240, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .app-feature');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, .app-feature');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);
