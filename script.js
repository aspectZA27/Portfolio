document.addEventListener('DOMContentLoaded', () => {
    // Simple animation for header text fade-in
    const header = document.querySelector('header');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.transition = 'opacity 1.5s ease-in';
        header.style.opacity = 1;
    }, 100);
    
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});
