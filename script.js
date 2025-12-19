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

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle Menu Hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Tutup menu otomatis pas link diklik
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Hapus class active
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Logika Reveal Animation (tetap pakai yang lama)
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
    revealOnScroll();
});

const pohonLayer = document.getElementById('pohon-layer');

// Generate 20 pohon secara otomatis
for (let i = 0; i < 20; i++) {
  const pohon = document.createElement('div');
  pohon.className = 'pohon';
  // Variasi tinggi pohon sedikit
  const scale = 0.5 + Math.random();
  pohon.style.transform = `scale(${scale})`;
  pohonLayer.appendChild(pohon);
}