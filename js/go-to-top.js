const pagetopBtn = document.querySelector('.to-pagetop');
const cat = document.getElementById("scroll-image");

function toScrollTop() {
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

pagetopBtn.addEventListener('click', () => {
  cat.style.display = "flex";
  toScrollTop();
});

window.addEventListener('scroll', scrollEvents);

window.addEventListener('DOMContentLoaded', () => {
  const scrollImage = document.getElementById('scroll-image');
  const scrollButton = document.getElementById('scroll-button');

  function syncImageToScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const percentage = scrollTop / scrollHeight;

    const moveRange = window.innerHeight * 1.2;
    const newtop = moveRange * percentage - 120;
    scrollImage.style.top = `${newtop}px`;
    if (newtop == -120) {
      scrollImage.style.display = "none";
    }
  }

  window.addEventListener('scroll', syncImageToScroll);

  syncImageToScroll(); // 初期位置をセット
});
