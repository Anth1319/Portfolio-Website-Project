document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FADE-IN ANIMATION ON SCROLL
    // This makes cards and text pop in smoothly as you scroll down.
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply animation to cards and hero content
    const animElements = document.querySelectorAll('.glass-card, .hero-content, .hero-image');
    animElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    // 2. THE "FASTEST CAMPUS LEAVER" EASTER EGG
    // If someone tries to click the Send button, it jitters slightly like it's trying to leave.
    const contactBtn = document.querySelector('.contact-form .btn');
    if (contactBtn) {
        contactBtn.addEventListener('mouseover', () => {
            contactBtn.style.transform = "translateX(5px)";
            setTimeout(() => {
                contactBtn.style.transform = "translateX(0)";
            }, 100);
        });
    }

    // 3. ACTIVE LINK HIGHLIGHTING
    // Automatically bolds the nav link of the page you are currently on.
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    console.log("Jhan's Portfolio Engine: Fully Loaded 🏀🎮");
});