const btn = document.querySelector('.button');
const explore = document.querySelector('.explore');

btn.addEventListener('click', () => {
  explore.scrollIntoView({ behavior: 'smooth' });
});
