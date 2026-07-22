const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--white)' : '';
  });
});

// Rotating hero accent text
const phrases = [
  'scale under pressure.',
  'catch their own bugs.',
  'turn data into decisions.',
  'ship with confidence.'
];
const typed = document.getElementById('typed-text');
if (typed) {
  let i = 0;
  setInterval(() => {
    typed.style.opacity = '0';
    setTimeout(() => {
      i = (i + 1) % phrases.length;
      typed.textContent = phrases[i];
      typed.style.opacity = '1';
    }, 400);
  }, 3000);
  typed.style.transition = 'opacity 0.4s ease';
}
