if (window.location.hostname === 'nichonmarshall-cyber.github.io') {
  window.location.replace('https://ginascreationdolls.com/' + window.location.hash);
}

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


const heroImage = document.querySelector('#hero-doll');
const useHeroFallback = () => {
  if (!heroImage.dataset.fallback) return;
  const fallback = heroImage.dataset.fallback;
  delete heroImage.dataset.fallback;
  heroImage.src = fallback;
};
heroImage.addEventListener('error', useHeroFallback);
if (heroImage.complete && heroImage.naturalWidth === 0) useHeroFallback();
