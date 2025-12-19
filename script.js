document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll untuk Navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Offset biar gak terlalu mepet
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Reveal Animation (Muncul pas di-scroll)
    const sections = document.querySelectorAll('.section-reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if(sectionTop < triggerBottom) {
                section.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Jalankan sekali saat load
});