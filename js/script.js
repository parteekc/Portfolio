// Current year
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Smooth scroll for same-page links
for (const a of document.querySelectorAll('a[href^="#"]')) {
a.addEventListener('click', (e) => {
const id = a.getAttribute('href');
if (id && id.length > 1) {
e.preventDefault();
document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}
});
}


// IntersectionObserver reveal
const observer = new IntersectionObserver((entries) => {
for (const ent of entries) {
if (ent.isIntersecting) {
ent.target.classList.add('show');
observer.unobserve(ent.target);
}
}
}, { threshold: 0.12 });


document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Lightweight contact form handler (static sites)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
if (form) {
form.addEventListener('submit', async (e) => {
e.preventDefault();
const data = Object.fromEntries(new FormData(form).entries());
// Demo behavior for static hosting: pretend success
await new Promise(r => setTimeout(r, 600));
form.reset();
if (note) {
note.textContent = 'Thanks! Your message was sent.';
note.style.color = '#34d399';
}
});
}