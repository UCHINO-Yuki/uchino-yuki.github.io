const pagetopBtn = document.querySelector('.to-pagetop');

toScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
}

const scrollEvents = () => {
  if (window.scrollY >= 300) {
    pagetopBtn.classList.add('is-shown');
  } else {
    pagetopBtn.classList.remove('is-shown');
  }
}

pagetopBtn.addEventListener('click', toScrollTop);
window.addEventListener('scroll', scrollEvents);