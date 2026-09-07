const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#order-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Custom Doll Request from ${data.get('name')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nCustom doll idea:\n${data.get('idea')}`
  );
  window.location.href = `mailto:yaninacorrea110@gmail.com?subject=${subject}&body=${body}`;
});


const heroImage = document.querySelector('#hero-doll');
const useHeroFallback = () => {
  if (!heroImage.dataset.fallback) return;
  const fallback = heroImage.dataset.fallback;
  delete heroImage.dataset.fallback;
  heroImage.src = fallback;
};
heroImage.addEventListener('error', useHeroFallback);
if (heroImage.complete && heroImage.naturalWidth === 0) useHeroFallback();
