/* Pedasa Futbol Spor Kulübü — interactions */

document.getElementById('yr').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 24) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const revealEls = document.querySelectorAll(
  '.club__text, .club__crest, .cont__info, .cont__map'
);
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));
