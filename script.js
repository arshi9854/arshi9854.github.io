// Cursor glow effect
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// Smooth scroll for nav
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(item.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
