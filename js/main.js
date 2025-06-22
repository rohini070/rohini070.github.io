// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const navItems = document.querySelectorAll('.nav-links a');

// Mobile menu toggle with animation
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close mobile menu when clicking on a link
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Sticky Header on Scroll
const header = document.querySelector('header');
const headerHeight = header?.offsetHeight || 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active Link Highlighting
const sections = document.querySelectorAll('section');

function highlightNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = '#' + section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === current) {
            item.classList.add('active');
        }
    });
}

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const message = document.getElementById('message')?.value;
        
        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Add animation to elements when they come into view
const animateElements = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const projectCards = document.querySelectorAll('.project-card');
    const educationCards = document.querySelectorAll('.education-card');
    
    // Add fade-in class to elements
    timelineItems.forEach((item, index) => {
        item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.2}s`;
        item.style.opacity = '0';
    });
    
    projectCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
    });
    
    educationCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.15}s`;
        card.style.opacity = '0';
    });
};

// Initialize animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    animateElements();
    
    // Add animation to hero text
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.classList.add('fade-in');
    }
    
    // Add animation to hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        setTimeout(() => {
            heroImage.classList.add('fade-in');
        }, 300);
    }

    // Update footer year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Add scroll event listener for animations
window.addEventListener('scroll', () => {
    highlightNav();
    animateOnScroll();
    animateSkills();
});

// Add animation to skills on scroll
const skillTags = document.querySelectorAll('.skill-tag');

const animateSkills = () => {
    skillTags.forEach((tag, index) => {
        const tagPosition = tag.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (tagPosition < screenPosition) {
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
};

// Initial check for skills animation
animateSkills();

// Add loading animation
window.addEventListener('load', () => {
    // Remove loading animation after page loads
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-tag {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);
