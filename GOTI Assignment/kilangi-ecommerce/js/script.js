document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    // Open Menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.add('active');
    });

    // Close Menu
    closeMenuBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Close Menu when clicking a link (optional UX improvement)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Sticky Header Effect ---
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Simple Cart Interaction (Console Log Only) ---
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountSpan = document.querySelector('.cart-count');
    let cartCount = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountSpan.textContent = cartCount;
            // Visual feedback
            const originalText = button.textContent;
            button.textContent = "Added!";
            button.style.backgroundColor = "#c5a059"; // Gold color
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = ""; // Reset
            }, 1500);
        });
    });

});